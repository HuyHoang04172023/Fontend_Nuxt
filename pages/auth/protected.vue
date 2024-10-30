<template>
    <div>
      <h2>Welcome to the Protected Page</h2>
      <p>This page is only accessible to logged-in users.</p>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    middleware: 'auth'
  })
  </script>
  