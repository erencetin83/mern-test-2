var env = process.env;

export const NodeEnv = env.NODE_ENV || 'development';

export default {
  port : env.port || 8080
};

