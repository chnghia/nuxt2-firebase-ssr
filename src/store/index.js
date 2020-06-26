import { getUserFromCookie, getUserFromSession } from '@/helpers'

export const actions = {
  async nuxtServerInit({ commit }, { req }) {
    const user = getUserFromCookie(req)
    // console.log('[STORE ACTIONS] - getUserFromCookie:', user)
    if (user) {
      const userInfo = {
        name: user.name,
        email: user.email,
        avatar: user.picture,
        uid: user.user_id
      }
      const claims = {
        admin: user.admin ?? false,
        supplier: user.supplier ?? false,
        user: user.user ?? false
      }
      await commit('modules/user/setUSER', userInfo)
      await commit('modules/user/saveUID', userInfo.uid)
      await commit('modules/user/saveCLAIMS', claims)
    }
  }
}
