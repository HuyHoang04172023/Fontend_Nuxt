<template>
    <div>
      <h1>Data with Middleware Modification</h1>
      <div v-if="pending">Loading...</div>
      <div v-else-if="error">{{ error.message }}</div>
      <ul v-else>
        <li v-for="user in users" :key="user.id">
          <strong>Name:</strong> {{ user.name }} - <strong>Age:</strong> {{ user.age }} - <strong>Timestamp:</strong> {{ user.timestamp }}
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useFetch } from '#app'
  
  const { data, pending, error } = useFetch('/api/data')
  
  // Truy cập users từ API
  const users = computed(() => data.value?.users ?? [])
  </script>
  