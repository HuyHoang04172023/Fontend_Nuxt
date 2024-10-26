<template>
  <div class="container">
    <div class="day-section">
      <h1>Day 6</h1>
      <NuxtLink to="/day6/title" class="link">Bài 1</NuxtLink>
      <NuxtLink to="/day6/products" class="link">Bài 3</NuxtLink>
      <NuxtLink to="/day6/demoapp" class="link">Bài 4</NuxtLink>
      <NuxtLink to="/day6/to-do-list" class="link">Bài 5</NuxtLink>
    </div>

    <div class="day-section">
      <h1>Day 7</h1>
      <NuxtLink to="/day7/posts" class="link">Bài 1</NuxtLink>
      <NuxtLink to="/day7/api-data" class="link">Bài 2</NuxtLink>
      <NuxtLink to="/day7/data" class="link">Bài 3</NuxtLink>
      <NuxtLink to="/day7/admin" class="link">Bài 4</NuxtLink>
      <NuxtLink to="/day7/post-list" class="link">Bài 5</NuxtLink>
    </div>

    <div class="day-section">
      <h1>Day 8</h1>
      <NuxtLink to="/day8/counter" class="link">Bài 1</NuxtLink>
      <NuxtLink to="/day8/todos/1" class="link">Bài 2</NuxtLink>
      <NuxtLink to="/day8/todos" class="link">Bài 3</NuxtLink>
      <NuxtLink to="/day8/tasks" class="link">Bài 4</NuxtLink>
      <NuxtLink to="/day8/posts" class="link">Bài 5</NuxtLink>
    </div>
  </div>
</template>

<script setup>
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.day-section {
  margin-bottom: 30px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #f9f9f9;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.day-section h1 {
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
  text-align: center;
}

.link {
  margin: 8px 0;
  color: #007bff;
  text-decoration: none;
  font-size: 18px;
  transition: color 0.3s;
  text-align: center;
}

.link:hover {
  color: #0056b3;
}
</style>
