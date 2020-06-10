export const state = () => ({
  isLogged: false,
  user: null
})

export const getters = {
  isLogged: state => {
    return state.isLogged
  },
  user: state => {
    return state.user
  }
}

export const mutations = {
  SET_LOGGEDIN(state, payload) {
    state.isLogged = true
    state.user = payload
    this.$router.push('/')
  },
  SET_LOGGEDOUT(state) {
    state.isLogged = false
    this.$router.push('/auth/login')
  },
  SET_ISAUTH(state, user) {
    state.isLogged = true
    state.user = user
  },
  async SET_USER(state, user) {
    state.isLogged = true
    state.user = user
  }
}

export const actions = {
  async getUser({ commit }) {
    if(process.browser) {
      try {
        await this.$axios.get('/csrf-cookie')
        const response = await this.$axios.get('/user')
        await commit('SET_USER', response.data)
      } catch (e) {
        console.error(e.response.data.message)
      }
    }
  }
}

