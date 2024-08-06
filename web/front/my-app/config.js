const config = {
    apiPrefix: process.env.NODE_ENV === 'production' ? '' : 'http://127.0.0.1:5000'
  };
  
  module.exports = config;
  