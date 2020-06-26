# Nuxt2 Firebase SSR

This repo is starterkit with NuxtJS + Firebase SSR + Auth + Claims + ...

Also, Firebase RealtimeDB / Firestore / Storage / Markdown content

Inspired by [nuxt2-ssr-firebase](https://github.com/davidroyer/nuxt2-ssr-firebase.git), [nuxt-ssr-firebase-auth.v2](https://github.com/davidroyer/nuxt-ssr-firebase-auth.v2.git), [vuejs-firebase-role-based-auth](https://github.com/softauthor/vuejs-firebase-role-based-auth.git)

Special thanks David Royer, ...

## Packages

- nuxt: 2.13.0
- firebase: 7.15.4
- firebase-tools: 8.4.0
- firebase-functions: 3.6.0

## Build Setup

```bash
# build
$ npm run build

# serve with hot reload at localhost:3000
$ npm run dev

# serve with function emulation at localhost:5000
$ npm run serve

# build for production and deploy to firebase
$ npm run deploy

```

## TODO

- [x] Fixed some issues related with firebase-tools, firebase-functions version compatible
- [x] Fixed Firebase SSR function with Nuxtjs 2.13.0
- [x] Fixed Firebase Auth cookie of Firebase Cloud Function ([link](https://firebase.google.com/docs/hosting/manage-cache#using_cookies))
- [x] Add Firebase Auth Custom Claims
- [x] Add Admin Console handles with Custom Claims (need adminsdk)
- [x] Update `npm run admin:set` with `email` not `uid`
- [x] Auth & claim check route
- [ ] Google Login button
- [ ] RealtimeDB `roles` handle
- [ ] User create a blog post
- [ ] User blog display
- [ ] Dropzone file upload by user
- [ ] Denormalize data with `user_files` & `admin_files`
- [ ] Markdown content handle

## Licenses

MIT
