<template>
  <v-container
    fluid
    fill-height
  >
    <v-row
      align-content="center"
      justify="center"
    >
      <v-col
        align-self="center"
        cols="12"
        sm="8"
        md="4"
      >
      <v-card class="elevation-12">
        <v-toolbar
          color="red"
          dark
          flat
        >
          <v-toolbar-title>Login form</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field
              label="Login"
              name="login"
              prepend-icon="mdi-account"
              type="text"
              v-model="form.email"
              color="red"
            ></v-text-field>

            <v-text-field
              id="password"
              label="Password"
              name="password"
              prepend-icon="mdi-lock"
              type="password"
              v-model="form.password"
              color="red"
            ></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" text @click="pressed">LOGIN</v-btn>
        </v-card-actions>
      </v-card>
      <v-alert v-if="errors" type="warning" class="mt-5">
        {{ errors.email[0] }}
      </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  data() {
    return {
      form: {
        email: 'fabio@fabiomangolini.net',
        password: 'zxasqw12',
      },
      errors: null
    }
  },
  methods: {
    ...mapMutations({
      SET_LOGGEDIN: 'auth/SET_LOGGEDIN'
    }),
    async pressed() {
      try {
        const response = await this.$axios.post('/login', this.form)
        this.SET_LOGGEDIN(response.data)
        this.$cookies.set('auth', 'true')
      } catch(e) {
        this.errors =  e.response.data.errors
      }
    }
  }
}
</script>

<style scoped>
  .login-container {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .login {
    padding: 4rem 3rem;
    border-radius: 25px;
    box-shadow: 2px 2px 30px #eee;
  }
</style>