export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  srcDir: 'src',
  modules: ['@nuxt/eslint', '@nuxt/fonts', '@nuxt/icon', '@nuxt/image', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: '../i18n.config.ts',
  },
  css: ['@/shared/styles/index.scss'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
    },
  },
  experimental: {
    componentIslands: true,
  },
});
