<template>
    <div>
      <header>
        <h1>Projext Nuxtjs 3</h1>
        <nav>
          <NuxtLink to="/">Trang chính</NuxtLink>
        </nav>
      </header>
  
      <main>
        <slot />
      </main>
  
      <footer>
        <p>Huy Hoang</p> 
      </footer>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style>
  header {
    background-color: #f8f8f8;
    padding: 10px;
    text-align: center;
  }
  
  footer {
    background-color: #f1f1f1;
    padding: 10px;
    text-align: center;
  }
  </style>
  