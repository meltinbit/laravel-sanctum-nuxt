<template>
  <section v-if="user" class="hero is-primary">
    <div class="hero-body">
      <div class="container">
          <h1 class="title">Welcome</h1> 
          <h2 class="subtitle">{{ user.name }} {{ user.email }}</h2 class="subtitle">
      </div>
    </div>
  </section>
</template>

<script>
import Register from '@/components/sanctum/Register'
import { mapGetters } from 'vuex'

export default {
  components: {
    Register,
  },
  methods: {
  },
  computed: {
    ...mapGetters({
      user: 'auth/user'
    })
  }
}
</script>