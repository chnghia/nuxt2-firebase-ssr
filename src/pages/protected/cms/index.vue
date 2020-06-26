<template>
  <section>
    <article class="content-center text-center mt-4">
      <div>CMS Protected page --- only authenticated users can see this</div>
      <h2 class="headline">
        Rendered From:
        <span class="render-result">{{ renderSource }}</span>
      </h2>
      <button
        id="reload-btn"
        class="bg-blue-500 hover:bg-blue-700 text-white uppercase py-2 px-4 rounded shadow"
        @click="reloadPage"
      >Reload Page</button>
      <div v-if="isLoggedIn">
        <div>User ID: {{ authUser.uid }}</div>
        <h3>Current User: {{ authUser.email }}</h3>
        <h3>Current Role: {{ authUser.email }}</h3>
        <img v-if="authUser.avatar" :src="authUser.avatar" alt />
        <!-- <div>All DB Users: {{ allusers }}</div> -->
      </div>
    </article>
  </section>
</template>

<script>
export default {
  asyncData() {
    return {
      renderSource: process.static ? 'static' : process.server ? 'server' : 'client'
    }
  },
  computed: {
    isLoggedIn: () => {
      return false
    }
  },
  methods: {
    reloadPage() {
      window.location.reload()
    }
  }
}
</script>
