<template>
    <div>
      <h1>Admin Page</h1>
      <form @submit.prevent="addItem">
        <input v-model="newItem" placeholder="Add new item" />
        <button type="submit">Add</button>
      </form>
      <ul>
        <li v-for="item in items" :key="item.id">
          {{ item.name }} - {{ item.id }}
          <button @click="deleteItem(item.id)">Delete</button>
          <button @click="editItem(item)">Edit</button>
        </li>
      </ul>
  
      <div v-if="editing">
        <h2>Edit Item</h2>
        <form @submit.prevent="updateItem">
          <input v-model="editing.name" placeholder="Edit item name" />
          <button type="submit">Update</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  
  const items = ref([]);
  const newItem = ref('');
  const editing = ref(null);
  
  const fetchItems = async () => {
    const data = await $fetch('/api/items');
    items.value = data;
  };
  
  const addItem = async () => {
    await $fetch('/api/items', { method: 'POST', body: { name: newItem.value } });
    newItem.value = '';
    await fetchItems();
  };
  
  const deleteItem = async (id) => {
  try {
    const response = await $fetch(`/api/items/${id}`, { method: 'DELETE' });

    if (!response.success) {
      throw new Error(response.message || 'Failed to delete item');
    }

    await fetchItems();
  } catch (error) {
    console.error('Error deleting item:', error.message);
    alert(`Error: ${error.message}`);
  }
};

  
  const editItem = (item) => {
    editing.value = { ...item };
  };
  
  const updateItem = async () => {
    await $fetch(`/api/items/${editing.value.id}`, { method: 'PUT', body: { name: editing.value.name } });
    editing.value = null;
    await fetchItems();
  };
  
  onMounted(fetchItems);
  </script>
  