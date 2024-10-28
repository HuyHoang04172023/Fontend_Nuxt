// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  pages: true,
  ssr: true,
  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
  ],
  nitro: {
    prerender: {
      routes: ['/todos/1', '/todos/2'],
    },
  },
})
