<template>
  <nav class="fixed top-0 z-40 w-full border-b dark:border-gray-800 bg-white dark:bg-gray-900" @click="scrollToTop">
    <div class="container mx-auto px-4 lg:px-8 flex-1">
      <div class="flex items-center justify-between h-16">
        <div class="w-1/6" @click.stop="noop">
          <NuxtLink to="/" class="text-xl font-bold tracking-tight flex items-center flex-shrink-0" style="width: 104px;" aria-label="Nuxt Content Logo">
            Logo
            <!-- <IconLogo v-if="$colorMode.value === 'light'" class="h-8 w-auto" /> -->
            <!-- <IconLogoDark v-else class="h-8 w-auto" /> -->
          </NuxtLink>
        </div>
        <div class="hidden flex-1 lg:flex justify-center ml-4 mr-2 lg:mx-8 w-4/6">
          <NuxtLink to="/protected/account">Account Page</NuxtLink>
          <NuxtLink to="/protected/cms" class="ml-2">CMS Page</NuxtLink>
          <NuxtLink to="/protected/admin" class="ml-2">Admin Page</NuxtLink>
          <!-- <SearchInput /> -->
        </div>
        <div class="flex items-center justify-end w-1/6" v-if="!isLoggedIn">
          <NuxtLink to="/auth/signin">Sign In</NuxtLink>
          <NuxtLink to="/auth/signup" class="ml-2">Sign Up</NuxtLink>
        </div>
        <div class="flex items-center justify-end w-1/6" v-if="isLoggedIn">
          <a href="#" @click="signout">Logout</a>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters('modules/user', {
      isLoggedIn: 'isAuthenticated'
    })
  },
  methods: {
    ...mapActions('modules/user', {
      logout: 'logout'
    }),
    scrollToTop() {
      if (window.innerWidth >= 1280) {
        return
      }
      window.scrollTo(0, 0)
    },
    noop() {},
    localePath() {
      return ''
    },
    async signout() {
      await this.logout()
      this.$router.push('/')
    }
  }
}
</script>
