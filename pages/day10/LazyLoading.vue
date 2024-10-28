<template>
    <button @click="loadComponent = true">Show Component</button>
    <button @click="loadComponent = false">Hiden Component</button>
    <Suspense>
        <component v-if="loadComponent" :is="LazyComponent" />
    </Suspense>
</template>

<script setup>
import { ref } from 'vue';
import { defineAsyncComponent } from 'vue';

const LazyComponent = defineAsyncComponent(() => import('@/components/day10/LazyComponent.vue'));
const loadComponent = ref(false);
</script>

<style scoped></style>