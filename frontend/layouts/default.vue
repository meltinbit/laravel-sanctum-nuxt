<template>
  <v-app>
    <v-app-bar
      app
      color="red"
      clipped-left
      dark
      v-if="isLogged"
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <span class="hidden-sm-and-down">Meltin Bit</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-text-field
        flat
        hide-details
        label="Search"
        prepend-inner-icon="mdi-account-search"
      ></v-text-field>


      <v-spacer></v-spacer>

      <v-btn icon>
        <logout />
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer
      v-model="drawer"
      app
      mini-variant
      expand-on-hover
      v-if="isLogged"
      color="grey lighten-4"
      clipped
    >
      <v-list dense class="grey lighten-4">
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <nuxt-link to="/" class="grey--text">HOME</nuxt-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-email</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>
              <nuxt-link to="/about" class="grey--text">ABOUT</nuxt-link>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-content>
      <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Logout from '@/components/sanctum/Logout'
import { mapGetters, mapActions } from 'vuex'

export default {
  components: {
    Logout
  },
  props: {
    source: String,
  },
  data() {
    return {
      drawer: null,
    }
  },
  methods: {
    ...mapActions({
      getUser: 'auth/getUser'
    })
  },
  computed: {
    ...mapGetters({
      isLogged: 'auth/isLogged'
    })
  },
  created() {
    this.getUser()
  }
}
</script>