<template>
  <div>
      <input v-model="form.name" />
      <input v-model="form.email" />
      <input v-model="form.password" />
      <input v-model="form.password_confirmation" />
      <button @click="pressed">register</button>
  </div>
</template>

<script>


export default {
  data() {
    return {
      form: {
        name: null,
        email: null,
        password: null,
        password_confirmation: null
      },
      errors: []
    }
  },
  methods: {
    async pressed() {
      try {
        await this.$axios.get('/csrf-cookie')
        const response = await this.$axios.post('/register', this.form)
      } catch(e) {
        this.errors =  e.response.data.errors
      }
    }
  }
}
</script>