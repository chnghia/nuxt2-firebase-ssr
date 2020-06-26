<template>
  <div class="flex flex-wrap-reverse">
    <div class="w-full pt-16 dark:border-gray-800">
      <article class="content-center text-center">
        <logo />
        <h2>Updated with Cookie check in nuxt server init</h2>
        <p>Unprotected page --- anyone can see this</p>
        <h1 class="text-xl">nuxt-firebase-ssr</h1>
        <h2 class="text-lg">My fantabulous Nuxt.js project</h2>
        <h2 class="text-base">
          Rendered From:
          <span class="text-red-500">{{ renderSource }}</span>
        </h2>
        <button
          id="reload-btn"
          class="bg-blue-500 hover:bg-blue-700 text-white uppercase py-2 px-4 rounded shadow"
          @click="reloadPage"
        >Reload Page</button>
        <div class="pt-8">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="bg-pink-500 hover:bg-blue-700 text-white uppercase py-2 px-4 rounded shadow"
          >Documentation</a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="bg-pink-500 hover:bg-blue-700 text-white uppercase py-2 px-4 rounded shadow"
          >GitHub</a>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  asyncData() {
    return {
      renderSource: process.static ? 'static' : process.server ? 'server' : 'client'
    }
  },
  components: {
    Logo
  },
  methods: {
    reloadPage() {
      window.location.reload()
    }
  }
}
</script>

<style lang="postcss"></style>
