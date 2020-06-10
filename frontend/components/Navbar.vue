<template>
  <b-navbar v-if="isLogged">
      <template slot="brand">
          <b-navbar-item tag="router-link" :to="{ path: '/' }">
              <img
                  src="https://raw.githubusercontent.com/buefy/buefy/dev/static/img/buefy-logo.png"
                  alt="Lightweight UI components for Vue.js based on Bulma"
              >
          </b-navbar-item>
      </template>
      <template slot="start">
          <b-navbar-item tag="nuxt-link" to="/">
              Home
          </b-navbar-item>
          <b-navbar-item tag="nuxt-link" to="/about">
              About
          </b-navbar-item>
      </template>

      <template slot="end">
          <logout className="navbar-item" />
      </template>
  </b-navbar>
</template>

<script>
import Logout from '@/components/sanctum/Logout'
import { mapGetters } from 'vuex'

export default {
  components: {
    Logout
  },
  computed: {
    ...mapGetters({
      isLogged: 'auth/isLogged'
    })
  }
}
</script>