export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#3B0070' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ['@nuxtjs/pwa'],
  /*
   ** Build configuration
   */
  buildDir: '../functions/.nuxt',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
    /*
     ** Run ESLint on save
     */
    extend(config, { isDev, isClient }) {
      //   if (isDev && isClient) {
      //     config.module.rules.push({
      //       enforce: 'pre',
      //       test: /\.(js|vue)$/,
      //       loader: 'eslint-loader',
      //       exclude: /(node_modules)/,
      //       options: {
      //         configFile: '.eslintrc.js'
      //       }
      //     })
      //   }

      if (isDev) {
        config.resolve.alias['config'] = '~/config/development'
      } else {
        config.resolve.alias['config'] = '~/config/production'
      }
    }
  }
}
