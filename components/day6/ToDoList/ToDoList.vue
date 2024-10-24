<!-- components/ToDoList.vue -->
<template>
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <nuxt-link :to="`/day6/to-do-list/${todo.id}`">{{ todo.title }}</nuxt-link>
      </li>
    </ul>
  </template>
  
  <script setup>
  const props = defineProps({
    todos: {
      type: Array,
      required: true
    }
  });
  </script>
  