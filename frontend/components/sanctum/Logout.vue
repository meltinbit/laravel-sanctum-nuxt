<template>
  <v-icon @click="logout">mdi-logout</v-icon>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  methods: {
    ...mapMutations({
      SET_LOGGEDOUT: 'auth/SET_LOGGEDOUT'
    }),
    async logout() {
      try {
        await this.$axios.get('/csrf-cookie')
        await this.$axios.post('/logout')
        this.SET_LOGGEDOUT()
        this.$cookies.remove('auth')
      } catch(e) {

      }
    }
  }
}
</script>