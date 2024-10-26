<template>
    <div>
      <h1>Danh sách Danh mục</h1>
      <ul>
        <li v-for="category in categories" :key="category.id">{{ category.name }}</li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useCategoryStore } from '~/stores/day8/categoryStore'
  
  const categoryStore = useCategoryStore()
  const categories = categoryStore.categories
  </script>
  