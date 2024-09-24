<template>
  <div class="todo-input">
    <input
      v-model="newTodo"
      @keyup.enter="onAddTodo"
      placeholder="Добавьте задачу"
      class="todo-input__input"
    />
    <button @click="onAddTodo" class="todo-input__button">Добавить</button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useTodoStore } from '../store';

const newTodo = ref('');
const { addTodo } = useTodoStore();

const onAddTodo = () => {
  if (newTodo.value.trim()) {
    addTodo(newTodo.value);
    newTodo.value = '';
  }
};
</script>

<style scoped>
.todo-input {
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
}

.todo-input__input {
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.todo-input__button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
</style>
    