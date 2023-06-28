const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "",
  configureWebpack: {
    resolve: { fallback: { url: false, crypto: false } }
  }
});
