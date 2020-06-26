export default function({ store, redirect }) {
  if (!store.getters['modules/user/isAdmin']) {
    return redirect('/auth/signin')
  }
}
