<template>
    <div v-if="post">
      <h1>{{ post.title }}</h1>
      <p>{{ post.content }}</p>
      <p>Category: {{ categoryName }}</p>
      <NuxtLink to="/day8/posts">Quay lại danh sách</NuxtLink>
      
      <button @click="editing = !editing">Chỉnh sửa</button>
      <button @click="deletePost">Xóa bài viết</button>
  
      <div v-if="editing">
        <AddPostForm :post="post" />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  import { usePostStore } from '~/stores/day8/postStore'
  import { useCategoryStore } from '~/stores/day8/categoryStore'
  import AddPostForm from '~/components/day8/posts/AddPostForm.vue'
  
  const route = useRoute()
  const router = useRouter()
  const postStore = usePostStore()
  const categoryStore = useCategoryStore()
  
  const post = postStore.getPostById(route.params.id)
  const categoryName = post ? categoryStore.getCategoryById(post.categoryId)?.name : ''
  const editing = ref(false)
  
  function deletePost() {
    postStore.deletePost(post.id)
    router.push('/day8/posts')
  }
  </script>
  