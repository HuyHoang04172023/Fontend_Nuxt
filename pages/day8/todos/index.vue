<template>
    <div>
      <h2>Danh sách công việc</h2>
      <ul>
        <li v-for="todo in todos" :key="todo.id">
          <NuxtLink :to="`/day8/todos/${todo.id}`">{{ todo.title }}</NuxtLink>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const todos = ref([]);
  
  onMounted(async () => {
    try {
      const response = await $fetch('/api/day8/todos');
      todos.value = response;
    } catch (error) {
      console.error('Lỗi khi tải bài viết:', error);
    }
  });
  </script>
  