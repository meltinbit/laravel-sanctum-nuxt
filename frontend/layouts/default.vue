<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import { mapActions } from 'vuex'

export default {
  components: {
    Navbar
  },
  methods: {
    ...mapActions({
      getUser: 'auth/getUser'
    })
  },
  created() {
    this.getUser()
  }
}
</script>