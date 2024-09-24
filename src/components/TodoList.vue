<template>
  <ul class="todo-list">
    <TodoItem
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
  </ul>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useTodoStore } from '../store';
import TodoItem from './TodoItem.vue';

const todoStore = useTodoStore();
const todos = computed(() => todoStore.todos);
</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
}
</style>
    