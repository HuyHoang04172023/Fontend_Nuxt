<template>
  <div>
    <h1>Data từ API:</h1>
    <pre>{{ data }}</pre>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue';

const data = ref(null);

onMounted(async () => {
  const response = await $fetch('/api/day7/custom-api');
  data.value = response.data;
});
</script>


