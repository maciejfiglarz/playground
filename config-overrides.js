const { alias, configPaths } = require('react-app-rewire-alias');
console.log("path");
module.exports = function override(config) {
  return alias(configPaths('./tsconfig.paths.json'))(config);
};