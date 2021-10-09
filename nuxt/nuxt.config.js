const environment = process.env.NODE_ENV || 'development'
require('dotenv').config()

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  server: {
    port: process.env.APP_SERVER_PORT,
    host: "0.0.0.0"
  },

  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Noukotsubo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: '/mdb5/css/mdb.min.css' }
    ],
      script: [
        { src: '/mdb5/js/mdb.min.js'},
      ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.API_URL,
    browserBaseURL: process.env.API_BROWSER_URL,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
