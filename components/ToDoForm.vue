<!-- components/ToDoForm.vue -->
<template>
    <form @submit.prevent="addTodo">
      <input v-model="title" placeholder="Title" required /><br>
      <textarea v-model="description" placeholder="Description"></textarea><br>
      <button type="submit">Add</button>
    </form>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const title = ref('');
  const description = ref('');
  const emit = defineEmits(['add-todo']);
  
  const addTodo = () => {
    const newTodo = {
      id: 0,
      title: title.value,
      description: description.value
    };
    emit('add-todo', newTodo);
    title.value = '';
    description.value = '';
  };
  </script>
  