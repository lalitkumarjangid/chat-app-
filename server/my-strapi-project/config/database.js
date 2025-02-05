module.exports = ({ env }) => {
  const config = {
    defaultConnection: 'default',
    connections: {
      default: {
        connector: 'mongoose',
        settings: {
          client: 'mongo',
          host: env('DATABASE_HOST', 'localhost'),
          srv: env.bool('DATABASE_SRV', false),
          port: env.int('DATABASE_PORT', 27017),
          database: env('DATABASE_NAME', 'my-database'),
          username: env('DATABASE_USERNAME', null),
          password: env('DATABASE_PASSWORD', null),
        },
        options: {
          authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
          ssl: env.bool('DATABASE_SSL', false),
        },
      },
    },
  };
  
  console.log('Database Config:', config);

  return config;
};
