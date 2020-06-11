<template>
  <login />
</template>

<script>
import Login from '@/components/sanctum/Login'

export default {
  layout (context) {
    return 'login'
  },
  components: {
    Login
  }
}
</script>