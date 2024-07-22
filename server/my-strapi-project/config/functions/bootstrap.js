// config/functions/bootstrap.js
module.exports = (strapi) => {
  const { Server } = require('socket.io');
  const io = new Server(strapi.server);

  io.on('connection', (socket) => {
    const { roomId, username } = socket.handshake.query;
    socket.join(roomId);

    // Notify others that a new user has joined
    socket.to(roomId).emit('userJoined', username);

    // Handle incoming messages
    socket.on('sendMessage', async ({ text }) => {
      const message = await strapi.services.message.create({
        text,
        user: username,
        room: roomId,
      });
    
      io.to(roomId).emit('message', message);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      socket.to(roomId).emit('userLeft', username);
    });
  });

  strapi.io = io; // Make io available through the Strapi object
};