<template>
  <li class="todo-item">
    <input
      type="checkbox"
      :checked="todo.completed"
      @change="onToggleTodo"
      class="todo-item__checkbox"
    />
    <span :class="['todo-item__text', { 'todo-item__text--completed': todo.completed }]">
      {{ todo.text }}
    </span>
    <button @click="onDeleteTodo" class="todo-item__button todo-item__button--delete">Удалить</button>
  </li>
</template>

<script setup lang="ts">
import { PropType } from 'vue';
import { useTodoStore } from '../store';
import { Todo } from '../store';

const { todo } = defineProps({
  todo: {
    type: Object as PropType<Todo>,
    required: true,
  },
});

const { toggleTodo, deleteTodo } = useTodoStore();

const onToggleTodo = () => {
  toggleTodo(todo.id);
};

const onDeleteTodo = () => {
  deleteTodo(todo.id);
};
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.todo-item__checkbox {
  margin-right: 10px;
}

.todo-item__text {
  flex: 1;
}

.todo-item__text--completed {
  text-decoration: line-through;
  color: #aaa;
}

.todo-item__button {
  padding: 5px 10px;
  border: none;
  border-radius: 4px;
  background-color: #dc3545;
  color: white;
  cursor: pointer;
}
</style>
    