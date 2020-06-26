// const fbApp = require('../src/modules/firebase')
const admin = require('firebase-admin')

const serviceAccount = require('./adminsdk.json')

const arg1 = process.argv[2]
const arg2 = process.argv[3]
console.log(`Set user email: ${arg1} with role: ${arg2}`)

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://nuxt-ssr-3e4c7.firebaseio.com',
})

async function setRole() {
  try {
    const userRecord = await admin.auth().getUserByEmail(arg1)

    const customClaims = {}

    if (arg2 === 'admin') {
      customClaims.admin = true
    } else if (arg2 === 'supplier') {
      customClaims.supplier = true
    } else {
      customClaims.user = true
    }

    const _ = await admin.auth().setCustomUserClaims(userRecord.uid, customClaims)
  } catch (error) {
    console.log(error)
  }
}

setRole().then(
  (result) => {
    console.log('DONE!')
    process.exit()
  },
  (err) => {
    console.error(err)
  }
)
