<template>
  <div class="app">
    <h1 class="app__title">To-Do Список</h1>
    <TodoInput />
    <TodoList />
  </div>
</template>

<script setup lang="ts">
import TodoInput from './TodoInput.vue';
import TodoList from './TodoList.vue';

</script>

<style scoped>
.app {
  font-family: Arial, sans-serif;
  max-width: 600px;
  margin: 20px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.app__title {
  text-align: center;
  margin-bottom: 20px;
}
</style>
    