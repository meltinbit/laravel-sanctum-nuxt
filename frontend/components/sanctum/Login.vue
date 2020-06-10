<template>
  <div class="login-container">
    <div class="login">
      <b-field label="Email">
          <b-input 
            rounded
            size="is-medium"
            v-model="form.email"
            icon="email"
            type="email"
            value="john@"
            maxlength="30">
          </b-input>
      </b-field>
      <b-field label="Password">
        <b-input 
          rounded
          size="is-medium"
          v-model="form.password"
          type="password"
          value="iwantmytreasure"
          password-reveal>
        </b-input>
      </b-field>
      <br>
      <b-notification v-if="errors" type="is-danger">
          {{ errors.email[0] }}
      </b-notification>
      <b-button 
        @click="pressed" 
        type="is-primary" 
        rounded 
        expanded
        size="is-medium"
        >
        LOGIN
      </b-button>
    </div>
  </div>
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