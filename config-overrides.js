const path = require("path");
module.exports = function override(config, env) {
  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.alias,
      "@Components": path.resolve(__dirname, "src/Components"),
    },
  };
  return config;
};
