export default {
  saveCLAIMS(state, claims) {
    console.log('[STORE MUTATIONS] - saveCLAIMS:', claims)
    state.claims = claims
  },
  saveUID(state, uid) {
    console.log('[STORE MUTATIONS] - saveUID:', uid)
    state.uid = uid
  },
  setUSER(state, user) {
    console.log('[STORE MUTATIONS] - setUSER:', user)
    state.user = user
  }
}
