export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  srcDir: 'src',
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/test-utils/module',
    '@nuxtjs/google-fonts',
  ],
  plugins: ['~/plugins/msw.client', '~/plugins/init-auth', '~/plugins/init-i18n'],
  i18n: {
    vueI18n: '~/i18n/i18n.config.ts',
    types: 'composition',
  },
  css: ['@/shared/styles/index.scss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'us',
      },
    },
  },
  googleFonts: {
    families: {
      Roboto: [100, 300, 400, 500, 700, 900],
      'Open+Sans': true,
    },
    display: 'swap',
  },
  experimental: {
    componentIslands: true,
  },
});
