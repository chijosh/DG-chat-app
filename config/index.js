const devConfig = require('./devConfig');
const prodConfig = require('./prodConfig');
let baseConfig = {};

switch (process.env.NODE_ENV) {
  case 'development':
    baseConfig = devConfig;
    break;
  case 'production':
    baseConfig = prodConfig;
    break;
  default:
    baseConfig = devConfig;
}

module.exports = baseConfig;
