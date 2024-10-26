<template>
    <div v-if="task">
      <h1>{{ task.title }}</h1>
      <p>{{ task.description }}</p>
      <button @click="goBack">Back</button>
    </div>
    <div v-else>
      <p>Task not found.</p>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useRoute, useRouter } from 'vue-router'
  import { computed } from 'vue'
  import { useTaskStore } from '~/stores/day8/taskStore'
  
  const store = useTaskStore()
  const route = useRoute()
  const router = useRouter()
  const taskId = parseInt(route.params.id as string)
  const task = computed(() => store.tasks.find(task => task.id === taskId))
  
  const goBack = () => {
    router.push('/day8/tasks')
  }
  </script>
  