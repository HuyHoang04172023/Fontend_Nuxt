<!-- components/ToDoItem.vue -->
<template>
    <div>
      <h2>{{ todo.title }}</h2>
      <p>{{ todo.description }}</p>
    </div>
  </template>
  
  <script setup>
  const props = defineProps({
    todo: {
      type: Object,
      required: true
    }
  });
  </script>
  