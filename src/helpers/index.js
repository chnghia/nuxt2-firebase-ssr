import jwtDecode from 'jwt-decode'
import cookieparser from 'cookieparser'

export function getUserFromCookie(req) {
  // console.log('[getUserFromCookie] - ', req.headers)
  if (process.server && process.static) return
  if (!req.headers.cookie) return

  if (req.headers.cookie) {
    const parsed = cookieparser.parse(req.headers.cookie)
    const accessTokenCookie = parsed['__session']
    if (!accessTokenCookie) return

    const decodedToken = jwtDecode(accessTokenCookie)
    if (!decodedToken) return

    return decodedToken
  }
}

export function getUserFromSession(req) {
  console.log('[CHECK-AUTH] - checking if user is stored in session')
  return req.session ? req.session.userId : null
}
