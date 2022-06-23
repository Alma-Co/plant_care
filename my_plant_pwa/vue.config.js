const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  pwa: {
    name: "Plantuary",
    themeColor: "#EDE6DB",
    msTileColor: "#417D7A",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "#417D7A",
  },
});
