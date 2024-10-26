<template>
    <div>
      <h1>Danh sách Danh mục</h1>
  
      <ul>
        <li v-for="category in categories" :key="category.id">
          <NuxtLink :to="`/category/${category.id}`">{{ category.name }}</NuxtLink>
          <button @click="editCategory(category)">Chỉnh sửa</button>
          <button @click="deleteCategory(category.id)">Xóa</button>
        </li>
      </ul>
  
      <h2>{{ editingCategory ? 'Cập nhật' : 'Thêm' }} Danh mục</h2>
      <CategoryForm :category="editingCategory" />
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useCategoryStore } from '~/stores/day8/categoryStore'
  import CategoryForm from '~/components/day8/posts/CategoryForm.vue'
  
  const categoryStore = useCategoryStore()
  const categories = categoryStore.categories
  const editingCategory = ref(null)
  
  function editCategory(category) {
    editingCategory.value = category
  }
  
  function deleteCategory(id) {
    categoryStore.deleteCategory(id)
    if (editingCategory.value && editingCategory.value.id === id) {
      editingCategory.value = null
    }
  }
  </script>
  