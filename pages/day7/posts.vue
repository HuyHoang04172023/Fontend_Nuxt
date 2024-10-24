<!-- pages/posts.vue -->
<template>
    <div>
      <h1>Posts</h1>
      <div v-if="pending">Loading...</div>
      <div v-else-if="error">{{ error.message }}</div>
      <ul v-else>
        <li v-for="post in posts" :key="post.id">
          <h3>{{ post.title }}</h3>
          <p>{{ post.body }}</p>
        </li>   
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useAsyncData } from '#app'
  
  const { data: posts, pending, error } = await useAsyncData('posts', () =>
    $fetch('https://jsonplaceholder.typicode.com/posts')
  )
  </script>
  