import actions from './actions'
import getters from './getters'
import mutations from './mutations'

const state = () => ({
  uid: null,
  user: null,
  claims: null
})

export { state, getters, mutations, actions }
