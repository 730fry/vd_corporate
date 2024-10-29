import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: false,

  app: {
    head: {
      title: 'Visionary Design',
      htmlAttrs: {
        lang: 'ja',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    }
  },

  css: [
    '~/assets/styles/style.scss',
  ],

  plugins: [],
  components: true,

  // buildModules: [
  //   '@nuxt/typescript-build',
  //   '@nuxtjs/eslint-module',
  // ],
  modules: [
    '@nuxt/image',
  ],

  build: {},
  compatibilityDate: '2024-10-29',
})


// export default {
//   // Target: https://go.nuxtjs.dev/config-target
//   ssr: false,

//   // Global page headers: https://go.nuxtjs.dev/config-head
//   head: {
//     title: 'Visionary Design',
//     htmlAttrs: {
//       lang: 'ja',
//     },
//     meta: [
//       { charset: 'utf-8' },
//       { name: 'viewport', content: 'width=device-width, initial-scale=1' },
//       { hid: 'description', name: 'description', content: '' },
//       { name: 'format-detection', content: 'telephone=no' },
//     ],
//     link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
//   },

//   // Global CSS: https://go.nuxtjs.dev/config-css
//   css: [
//     '~/assets/styles/style.scss',
//   ],

//   // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
//   plugins: [],

//   // Auto import components: https://go.nuxtjs.dev/config-components
//   components: true,

//   // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
//   buildModules: [
//     // https://go.nuxtjs.dev/eslint
//     '@nuxtjs/eslint-module',
//   ],

//   // Modules: https://go.nuxtjs.dev/config-modules
//   modules: [
//     // '@nuxtjs/style-resources',
//     '@nuxt/image',
//   ],

//   // Build Configuration: https://go.nuxtjs.dev/config-build
//   build: {},
// }