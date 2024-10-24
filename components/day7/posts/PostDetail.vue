<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const post = ref(null);

onMounted(async () => {
  try {
    const response = await $fetch(`/api/day7/posts/${route.params.id}`);
    post.value = response;
  } catch (error) {
    console.error('Lỗi khi tải chi tiết bài viết:', error);
  }
});
</script>
