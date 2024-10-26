<template>
    <div>
      <h1>Task List</h1>
      <form @submit.prevent="addTask">
        <input v-model="newTitle" placeholder="Task title" required />
        <input v-model="newDescription" placeholder="Task description" required />
        <button type="submit">Add Task</button>
      </form>
      <ul>
        <li v-for="task in tasks" :key="task.id">
          <span>{{ task.title }} - {{ task.description }}</span>
          <button @click="editTask(task)">Edit</button>
          <button @click="deleteTask(task.id)">Delete</button>
        </li>
      </ul>
      <div v-if="editingTask">
        <h2>Edit Task</h2>
        <form @submit.prevent="updateTask">
          <input v-model="editingTask.title" placeholder="Task title" required />
          <input v-model="editingTask.description" placeholder="Task description" required />
          <button type="submit">Update Task</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useTaskStore } from '~/stores/day8/taskStore'
  
  const store = useTaskStore()
  const newTitle = ref('')
  const newDescription = ref('')
  const editingTask = ref<{ id: number, title: string, description: string } | null>(null)
  
  const tasks = computed(() => store.tasks)
  
  const addTask = () => {
    store.addTask(newTitle.value, newDescription.value)
    newTitle.value = ''
    newDescription.value = ''
  }
  
  const editTask = (task: { id: number, title: string, description: string }) => {
    editingTask.value = { ...task }
  }
  
  const updateTask = () => {
    if (editingTask.value) {
      store.updateTask(editingTask.value.id, editingTask.value.title, editingTask.value.description)
      editingTask.value = null
    }
  }
  
  const deleteTask = (id: number) => {
    store.deleteTask(id)
  }
  </script>
  
  <style scoped>
  button {
    margin-left: 10px;
  }
  </style>
  