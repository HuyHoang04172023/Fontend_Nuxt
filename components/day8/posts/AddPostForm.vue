<template>
    <form @submit.prevent="submitForm">
      <input v-model="title" placeholder="Tiêu đề bài viết" required />
      <textarea v-model="content" placeholder="Nội dung bài viết" required></textarea>
      <select v-model="selectedCategory" required>
        <option v-for="category in categories" :key="category.id" :value="category.id">{{ category.name }}</option>
      </select>
      <button type="submit">{{ isEditMode ? 'Cập nhật' : 'Thêm' }} bài viết</button>
    </form>
  </template>
  
  <script setup>
  import { ref, watch } from 'vue'
  import { usePostStore } from '~/stores/day8/postStore'
  import { useCategoryStore } from '~/stores/day8/categoryStore'
  
  const postStore = usePostStore()
  const categoryStore = useCategoryStore()
  const categories = categoryStore.categories
  
  const title = ref('')
  const content = ref('')
  const selectedCategory = ref(null)
  
  // Để xác định nếu đang chỉnh sửa
  const isEditMode = ref(false)
  const props = defineProps(['post'])
  
  watch(() => props.post, (newPost) => {
    if (newPost) {
      title.value = newPost.title
      content.value = newPost.content
      selectedCategory.value = newPost.categoryId
      isEditMode.value = true
    }
  })
  
  function submitForm() {
    const newPost = {
      id: isEditMode.value ? props.post.id : (postStore.posts[postStore.posts.length - 1]?.id + 1 || 1),
      title: title.value,
      content: content.value,
      categoryId: selectedCategory.value
    }
  
    if (isEditMode.value) {
      postStore.updatePost(props.post.id, newPost)
    } else {
      postStore.addPost(newPost)
    }
  
    title.value = ''
    content.value = ''
    selectedCategory.value = null
    isEditMode.value = false
  }
  </script>
  