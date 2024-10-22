<template>
  <div>
    <h1>Data from API</h1>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">{{ error.message }}</div>
    <ul v-else>
      <li v-for="item in data.data" :key="item.id">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useFetch } from '#app'

const { data, pending, error } = await useFetch('/api/hello');
</script>
