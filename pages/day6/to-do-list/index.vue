<!-- pages/index.vue -->
<template>
    <ToDoForm @add-todo="handleAddTodo" />
    <ToDoList :todos="todos" />
</template>

<script setup>
import { ref, onMounted } from 'vue';
import ToDoList from '~/components/day6/ToDoList/ToDoList.vue';
import ToDoForm from '~/components/day6/ToDoList/ToDoForm.vue';
const todos = ref([]);

onMounted(() => {
    todos.value = [
        { id: 1, title: 'Task 1', description: 'Details of Task 1' },
        { id: 2, title: 'Task 2', description: 'Details of Task 2' }
    ];
});

const handleAddTodo = (newTodo) => {
    const lastId = todos.value.length > 0 ? todos.value[todos.value.length - 1].id : 0;
    newTodo.id = lastId + 1;
    todos.value.push(newTodo);
};
</script>