<template>
  <div v-if="images.length">
    <h2>Danh sách ảnh</h2>
    <div class="image-list">
      <NuxtImg v-for="(image, index) in images" :key="index" :src="image.src" :alt="image.alt"/>  
    </div>
  </div>
  <div v-else>
    <p>Không có ảnh để hiển thị.</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const images = ref([]);

onMounted(async () => {
  try {
    const res = await fetch('/api/day10');
    if (res.ok) {
      images.value = await res.json();
    } else {
      console.error('Failed to fetch images:', res.status);
    }
  } catch (error) {
    console.error('Error fetching images:', error);
  }
});
</script>

<style scoped>
.image-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.image-list img {
  width: 500px;
  height: auto;
  object-fit: cover;
}
</style>
