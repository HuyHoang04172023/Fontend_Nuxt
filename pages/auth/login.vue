<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <input type="text" v-model="username" placeholder="Username" required />
      <input type="password" v-model="password" placeholder="Password" required />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const username = ref('')
const password = ref('')
const router = useRouter()

function handleLogin() {
  if (username.value === 'admin' && password.value === 'admin') {
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('role', 'admin')
    router.push('/auth/admin')
  } else if (username.value === 'user' && password.value === 'user') {
    localStorage.setItem('isAuthenticated', 'true')
    localStorage.setItem('role', 'user')
    router.push('/auth/user')
  } else {
    alert('Invalid credentials')
  }
}

</script>
