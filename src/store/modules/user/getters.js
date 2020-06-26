function isAuthenticated(state) {
  return !!state.user && !!state.user.uid
}

export default {
  uid: state => {
    if (state.user && state.user.uid) {
      return state.user.uid
    } else {
      return null
    }
  },

  user: state => {
    return state.user
  },

  claims: state => {
    return state.claims
  },

  isAuthenticated: state => {
    return isAuthenticated(state)
  },

  isAdmin: state => {
    return isAuthenticated(state) && !!state.claims.admin
  },

  isSupplier: state => {
    return isAuthenticated(state) && !!state.claims.supplier
  },

  isUser: state => {
    return isAuthenticated(state) && !!state.claims.user
  }
}
