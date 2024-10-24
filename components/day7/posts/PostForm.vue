<template>
    <form @submit.prevent="addPost">
      <input v-model="title" placeholder="Tiêu đề" /><br>
      <textarea v-model="body" placeholder="Nội dung"></textarea><br>
      <button type="submit">Thêm Bài Viết</button><br>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const title = ref('');
  const body = ref('');
  
  const addPost = async () => {
    try {
      const response = await $fetch('/api/day7/posts', {
        method: 'POST',
        body: { title: title.value, body: body.value }
      });
      console.log('Bài viết mới:', response);
    } catch (error) {
      console.error('Lỗi khi thêm bài viết:', error);
    }
  };
  </script>
  