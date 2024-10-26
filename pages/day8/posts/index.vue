<template>
    <div>
      <h1>Danh sách Bài viết</h1>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink> (Category: <NuxtLink :to="`/category/${post.categoryId}`">{{ getCategoryName(post.categoryId) }}</NuxtLink>)
        </li>
      </ul>
      <NuxtLink to="/day8/posts/add-post">Thêm bài viết mới</NuxtLink><br>
      <NuxtLink to="/day8/category">Xem danh sách danh mục</NuxtLink>
    </div>
  </template>
  
  <script setup>
  import { usePostStore } from '~/stores/day8/postStore'
  import { useCategoryStore } from '~/stores/day8/categoryStore'
  
  const postStore = usePostStore()
  const posts = postStore.posts
  
  const categoryStore = useCategoryStore()
  function getCategoryName(categoryId) {
    return categoryStore.getCategoryById(categoryId)?.name || 'Không có danh mục'
  }
  </script>
  