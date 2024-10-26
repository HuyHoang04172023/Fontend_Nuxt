<template>
  <div v-if="todo">
    <h2>{{ todo.title }}</h2>
    <span :class="{'completed': todo.completed, 'not-completed': !todo.completed}">
      {{ todo.completed ? 'Đã hoàn thành' : 'Chưa hoàn thành' }}
    </span>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const todo = ref(null);

onMounted(async () => {
  try {
    const response = await $fetch(`/api/day8/todos/${route.params.id}`);
    todo.value = response;
  } catch (error) {
    console.error('Lỗi khi tải chi tiết bài viết:', error);
  }
});
</script>

<style scoped>
.completed {
  color: green;
  font-weight: bold;
}

.not-completed {
  color: red;
  font-weight: bold;
}
</style>
