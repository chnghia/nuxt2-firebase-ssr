import firebaseApp from '~/firebase/app'
import Cookies from 'js-cookie'

export default {
  async login({ commit, state }, user) {
    console.log('[STORE ACTIONS] - login')
    const token = await firebaseApp.auth().currentUser.getIdToken(true)
    const tokenResult = await firebaseApp.auth().currentUser.getIdTokenResult()
    const userInfo = {
      name: user.displayName,
      email: user.email,
      avatar: user.photoURL,
      uid: user.uid
    }
    const claims = {
      admin: tokenResult.claims.admin ?? false,
      supplier: tokenResult.claims.supplier ?? false,
      user: tokenResult.claims.user ?? false
    }

    Cookies.set('__session', token) // saving token in cookie for server rendering
    await commit('setUSER', userInfo)
    await commit('saveUID', userInfo.uid)
    await commit('saveCLAIMS', claims)
    console.log('[STORE ACTIONS] - in login, response:', status)
  },

  async logout({ commit, state }) {
    console.log('[STORE ACTIONS] - logout')
    await firebaseApp.auth().signOut()

    Cookies.remove('__session')
    commit('setUSER', null)
    commit('saveUID', null)
    commit('saveCLAIMS', null)
  },

  saveUID({ commit }, uid) {
    console.log('[STORE ACTIONS] - saveUID')
    commit('saveUID', uid)
  },

  setUSER({ commit }, user) {
    commit('setUSER', user)
  },

  saveCLAIMS({ commit }, claims) {
    commit('saveCLAIMS', claims)
  }
}
