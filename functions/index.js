process.env.DEBUG = 'nuxt:*'
const functions = require('firebase-functions')
const { Nuxt } = require('nuxt')

const nuxt = new Nuxt({
  mode: 'universal',
  telemetry: false,
  dev: false,
  buildDir: '.nuxt',
  build: {
    publicPath: '/assets/',
    extractCSS: true,
  },
})

const runtimeOpts = {
  timeoutSeconds: 300,
  memory: '1GB',
}
exports.ssrapp = functions.runWith(runtimeOpts).https.onRequest(async (request, response) => {
  try {
    await nuxt.ready()
    response.setHeader('Cache-Control', 'private')
    nuxt.render(request, response)
  } catch (err) {
    console.error(err)
  }
})
