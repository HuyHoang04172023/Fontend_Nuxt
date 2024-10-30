<template>
  <div>
    <header>
      <h1>Projext Nuxtjs 3</h1>
      <nav>
        <NuxtLink to="/">Trang chính</NuxtLink>
        <button @click="logout">Logout</button>
      </nav>
    </header>

    <main>
      <slot />
    </main>

    <footer>
      <p>Huy Hoang</p>
    </footer>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

function logout() {
  localStorage.removeItem('isAuthenticated')
  localStorage.removeItem('role')
  router.push('/auth/login')
}
</script>

<style>
header {
  background-color: #f8f8f8;
  padding: 10px;
  text-align: center;
}

footer {
  background-color: #f1f1f1;
  padding: 10px;
  text-align: center;
}
</style>