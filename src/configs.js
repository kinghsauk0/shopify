const configs = {
  development: {
    SERVER_URI: 'http://localhost:8080',
  },
  production: {
    SERVER_URI: 'https://messold101.myshopify.com',
  },
};

const config = configs[process.env.NODE_ENV || 'development'];

export default config;