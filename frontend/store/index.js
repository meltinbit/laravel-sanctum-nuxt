export const state = () => ({
  
})

export const getters = {
  
}

export const mutations = {
  
}

export const actions = {
  async nuxtServerInit( vueContext, context ) {
    const { app, redirect, req } = context
    if(!app.$cookies.get('auth'))
      redirect('/auth/login')
  }
}

