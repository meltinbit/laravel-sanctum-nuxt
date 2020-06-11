<template>
  <v-container v-if="user" fluid>
    <v-row>
      <v-col
        cols="12"
        sm="8"
        md="4"
      >
        <h1 class="title">Welcome</h1> 
        <h2 class="subtitle-1">{{ user.name }} {{ user.email }}</h2>
      </v-col>
    </v-row>
  </v-container>
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