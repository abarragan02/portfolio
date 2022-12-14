const { alias } = require('react-app-rewire-alias');

module.exports = function override(config) {
  alias({
    PFAssets: './src/assets',
    PFComponents: './src/components',
    PFConfig: './src/config',
    PFScreens: './src/screens',
    PFStore: './src/store',
    PFUtil: './src/util',
  })(config);

  return config;
};
