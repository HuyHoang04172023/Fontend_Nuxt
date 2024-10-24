<template>
    <div>
      <h2>Danh sách bài viết</h2>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <NuxtLink :to="`/day7/post-list/${post.id}`">{{ post.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const posts = ref([]);
  
  onMounted(async () => {
    try {
      const response = await $fetch('/api/day7/posts');
      posts.value = response;
    } catch (error) {
      console.error('Lỗi khi tải bài viết:', error);
    }
  });
  </script>
  