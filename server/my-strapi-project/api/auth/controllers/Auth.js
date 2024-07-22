// api/auth/controllers/Auth.js
module.exports = {
    async login(ctx) {
      const { identifier, password } = ctx.request.body;
  
      const user = await strapi.plugins['users-permissions'].services.user.fetch({
        username: identifier,
      });
  
      if (!user) {
        return ctx.badRequest('Invalid username or password');
      }
  
      const validPassword = await strapi.plugins['users-permissions'].services.user.validatePassword(
        password,
        user.password
      );
  
      if (!validPassword) {
        return ctx.badRequest('Invalid username or password');
      }
  
      ctx.send({
        jwt: strapi.plugins['users-permissions'].services.jwt.issue({ id: user.id }),
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      });
    },
  
    async register(ctx) {
      const { username, email, password } = ctx.request.body;
  
      const user = await strapi.plugins['users-permissions'].services.user.add({
        username,
        email,
        password,
      });
  
      ctx.send({
        jwt: strapi.plugins['users-permissions'].services.jwt.issue({ id: user.id }),
        user: {
          id: user.id,
          username: user.username,
          email: user.email,
        },
      });
    },
  };