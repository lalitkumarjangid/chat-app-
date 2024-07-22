import io from 'socket.io-client';

let socket;

export const initSocket = (roomId, username) => {
  socket = io('http://localhost:1337', {
    query: { roomId, username },
  });
  return socket;
};

export const getSocket = () => socket;