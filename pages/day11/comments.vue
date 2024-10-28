<template>
    <div class="comments-container">
      <h1>Danh sách bài viết</h1>
      <ul class="comments-list">
        <li v-for="comment in comments" :key="comment.id" class="comment-item">
          <h3 class="comment-title">{{ comment.name }}</h3>
          <p class="comment-email">{{ comment.email }}</p>
          <p class="comment-body">{{ comment.body }}</p>
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { useAsyncData } from 'nuxt/app';
  
  const { data: comments, error } = await useAsyncData('comments', () =>
    $fetch('/api/day11/comments')
  );
  
  if (error.value) {
    console.error("Đã xảy ra lỗi khi tải dữ liệu:", error.value);
  }
  </script>
  
  <style scoped>
  /* Container tổng */
  .comments-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    font-family: Arial, sans-serif;
  }
  
  /* Tiêu đề chính */
  .comments-container h1 {
    font-size: 2rem;
    color: #333;
    text-align: center;
    margin-bottom: 20px;
  }
  
  /* Danh sách các bình luận */
  .comments-list {
    list-style: none;
    padding: 0;
  }
  
  /* Từng bình luận */
  .comment-item {
    background-color: #f9f9f9;
    padding: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
  }
  
  /* Tiêu đề bình luận */
  .comment-title {
    font-size: 1.2rem;
    color: #0056b3;
    margin: 0 0 5px;
  }
  
  /* Email bình luận */
  .comment-email {
    font-size: 0.9rem;
    color: #666;
    margin: 0;
    font-style: italic;
  }
  
  /* Nội dung bình luận */
  .comment-body {
    font-size: 1rem;
    color: #333;
    margin-top: 10px;
    line-height: 1.5;
  }
  </style>
  