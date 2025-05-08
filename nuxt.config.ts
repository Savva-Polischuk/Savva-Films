// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  modules: [
    '@nuxt/icon'
  ],
  icon: {
    customCollections: [
      {
        prefix: 'icon',
        dir: './assets/icons',
        normalizeIconName: false
      },
    ],
  },
  vite: {
    css: {
        preprocessorOptions: {
                sass: {
                    additionalData: '@use "~/assets/sass/_mixins.sass" as *',
                },
            },
        },
    },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/sass/main.sass'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
    },
  ],
})