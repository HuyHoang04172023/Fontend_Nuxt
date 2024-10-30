<template>
    <div>
      <h2>Admin Dashboard</h2>
      <p>Welcome, Admin!</p>
    </div>
  </template>
  
  <script setup>
  definePageMeta({
    middleware: 'auth-role',
    requiresRole: 'admin' 
  })
  </script>
  