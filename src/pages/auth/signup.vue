<template>
  <!-- component -->
  <div class="bg-grey-lighter pt-5 flex flex-col">
    <div class="p-6 w-2/5 container mx-auto shadow-md">
      <form @submit.prevent="createUser">
        <h2 class="mb-2 text-xl text-blue-500">Sign Up</h2>

        <div class="mb-4">
          <label class="block mb-2 text-gray-500" for="email">Email</label>
          <input class="border w-full px-2 py-1" type="text" id="email" v-model="formData.email" />
        </div>

        <div class="mb-4">
          <label class="block mb-2 text-gray-500" for="password">Password</label>
          <input class="border w-full px-2 py-1" type="password" id="password" v-model="formData.password" />
        </div>
        <button class="bg-blue-500 text-white uppercase py-2 w-full shadow" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    isLoggedIn: () => {
      return false
    }
  },
  fetch() {
    // INFO -> this.$fireAuth user etc. are accessible
    // INFO -> this.$store.state.authUser is accessible even on server-side
  },
  data: () => ({
    formData: {
      email: '',
      password: ''
    },
    formValid: false,
    formRules: {
      email: [v => !!v || 'E-mail is required', v => /.+@.+\..+/.test(v) || 'E-mail must be valid'],
      names: [v => !!v || 'Name is required', v => (v && v.length <= 10) || 'Name must be less than 10 characters'],
      membershipUntil: [v => !!v || 'Required']
    }
  }),
  methods: {
    async createUser() {
      try {
        console.log(this.formData.email, this.formData.password)
        await this.$fireAuth.createUserWithEmailAndPassword(this.formData.email, this.formData.password)
      } catch (e) {
        alert(e)
      }
    }
  }
}
</script>
