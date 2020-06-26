<template>
  <section>
    <article class="content-center text-center mt-4">
      <div>ADMIN Protected page --- only authenticated users can see this</div>
      <h2 class="text-base">
        Rendered From:
        <span class="text-red">{{ renderSource }}</span>
      </h2>
      <button id="reload-btn" class="bg-blue-500 hover:bg-blue-700 text-white uppercase py-2 px-4 rounded shadow" @click="reloadPage">Reload Page</button>
      <div v-if="isAuthenticated">
        <div>User ID: {{ user.uid }}</div>
        <h3>Current User: {{ user.email }}</h3>
        <h3>Current Role: {{ claims }}</h3>
        <img v-if="user.avatar" :src="user.avatar" alt />
        <!-- <div>All DB Users: {{ allusers }}</div> -->
      </div>
    </article>
  </section>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
  middleware: 'check-role-admin',
  asyncData() {
    return {
      renderSource: process.static ? 'static' : process.server ? 'server' : 'client'
    }
  },
  computed: {
    ...mapGetters('modules/user', ['isAuthenticated', 'user', 'claims'])
  },
  methods: {
    reloadPage() {
      window.location.reload()
    }
  }
}
</script>
