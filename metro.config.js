const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);

// const exclusionList = require('metro-config/src/defaults/exclusionList');

// module.exports = {
//   resolver: {
//     blacklistRE: exclusionList([/node_modules\/.*\/android\/build\/.*/]),
//   },
// };
