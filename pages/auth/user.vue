<template>
    <div>
      <h2>User Dashboard</h2>
      <p>Welcome, User!</p>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    middleware: 'auth-role',
    requiresRole: 'user' 
  })
  </script>
  