<template>
  <div class="pt-16">
    <Navbar />
    <main class="container mx-auto px-4 lg:px-8">
      <div class="flex flex-wrap relative">
        <Nuxt class="w-full" />
      </div>
    </main>
    <!-- <TheFooter /> -->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
export default {
  components: {
    Navbar
  },
  created() {
    var self = this
  },
  computed: {
    bodyClass() {
      return []
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: [
          ...this.bodyClass,
          'antialiased text-gray-800 leading-normal bg-white dark:bg-gray-900 dark:text-gray-100'
        ]
      }
    }
  }
}
</script>
