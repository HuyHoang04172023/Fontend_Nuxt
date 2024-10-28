<template>
    <div>
      <h1>Danh sách sản phẩm</h1>
      <ul>
        <li v-for="product in products" :key="product.id">
          {{ product.name }} - {{ product.price }} VND
        </li>
      </ul>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import { useFetch } from '#app';
  
  const products = ref([]);
  onMounted(async () => {
    const { data } = await useFetch('/api/day11/products');
    products.value = data.value;
  });
  </script>
  