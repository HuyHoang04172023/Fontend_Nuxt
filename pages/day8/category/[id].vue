<template>
    <div>
      <h1>Danh mục: {{ category?.name }}</h1>
      <ul>
        <li v-for="post in filteredPosts" :key="post.id">
          <NuxtLink :to="`/day8/posts/${post.id}`">{{ post.title }}</NuxtLink>
        </li>
      </ul>
      <NuxtLink to="/day8/category">Quay lại danh sách danh mục</NuxtLink>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router'
  import { usePostStore } from '~/stores/day8/postStore'
  import { useCategoryStore } from '~/stores/day8/categoryStore'
  
  const route = useRoute()
  const postStore = usePostStore()
  const categoryStore = useCategoryStore()
  
  const category = categoryStore.getCategoryById(Number(route.params.id))
  const filteredPosts = postStore.posts.filter(post => post.categoryId === category?.id)
  </script>
  