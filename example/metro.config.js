const path = require('path');
const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    extraNodeModules: new Proxy(
      {},
      {get: (_, name) => path.resolve('.', 'node_modules', name)},
    ),
  },
  watchFolders: [path.resolve('.'), path.resolve('..')],
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
