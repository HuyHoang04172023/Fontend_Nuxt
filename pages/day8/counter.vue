<template>
    <p>Count: {{ counter.count }}</p><br>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </template>
  
  <script setup>
  import { useCounterStore } from '~/stores/counter';
  const counter = useCounterStore();
  const increment = () => {
    counter.increment();
  };
  const decrement = () => {
    counter.decrement();
  }
  </script>
  