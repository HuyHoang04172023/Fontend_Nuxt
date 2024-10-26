<template>
    <form @submit.prevent="submitForm">
      <input v-model="name" placeholder="Tên danh mục" required />
      <button type="submit">{{ isEditMode ? 'Cập nhật' : 'Thêm' }} danh mục</button>
    </form>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { useCategoryStore } from '~/stores/day8/categoryStore'
  
  const categoryStore = useCategoryStore()
  const name = ref('')
  
  const isEditMode = ref(false)
  const props = defineProps(['category'])
  
  watch(() => props.category, (newCategory) => {
    if (newCategory) {
      name.value = newCategory.name
      isEditMode.value = true
    }
  })
  
  function submitForm() {
    const newCategory = {
      id: isEditMode.value ? props.category.id : (categoryStore.categories[categoryStore.categories.length - 1]?.id + 1 || 1),
      name: name.value
    }
  
    if (isEditMode.value) {
      categoryStore.updateCategory(props.category.id, newCategory)
    } else {
      categoryStore.addCategory(newCategory)
    }
  
    name.value = ''
    isEditMode.value = false
  }
  </script>
  