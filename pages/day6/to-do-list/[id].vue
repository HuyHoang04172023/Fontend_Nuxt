<!-- pages/todos/[id].vue -->
<template>
    <ToDoItem v-if="todo" :todo="todo" />
  </template>
  
  <script setup>
  import { ref, onBeforeMount } from 'vue';
  import { useRoute } from 'vue-router';
  import ToDoItem from '~/components/day6/ToDoList/ToDoItem.vue';
  
  const route = useRoute();
  const todo = ref(null);
  
  onBeforeMount(() => {
    const todoId = Number(route.params.id);
    todo.value = {
      id: todoId,
      title: `Task ${todoId}`,
      description: `This is the detail of task ${todoId}.`
    };
  });
  
  definePageMeta({
    generateStaticParams() {
      return [
        { id: '1' },
        { id: '2' }
      ];
    }
  });
  </script>
  