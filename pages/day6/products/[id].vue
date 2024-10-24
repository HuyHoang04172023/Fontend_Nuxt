<template>
    <div>
      <h1>Chi tiết sản phẩm</h1>
      <p>ID sản phẩm: {{ productId }}</p>
      <p>Thông tin chi tiết về sản phẩm.</p>
    </div>
  </template>
  
  <script setup>
  import { useRoute } from 'vue-router';
  
  const route = useRoute();
  const productId = route.params.id;
  </script>
  
  <style>
  </style>
  