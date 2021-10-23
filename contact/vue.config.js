module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `@use "@/style/boot.scss" as *;`,
      },
    },
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locale",
      enableLegacy: true,
      runtimeOnly: false,
      fullInstall: true,
      compositionOnly: true,
    },
  },
};
