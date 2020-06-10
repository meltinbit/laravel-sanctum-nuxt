<template>
  <a :class="className" @click="logout">logout</a>    
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  props: {
    className: {
      title:  'className',
      type: String
    }
  },
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