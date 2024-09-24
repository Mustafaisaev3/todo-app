import { defineStore } from 'pinia';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodoStore = defineStore('todo', {
  state: () => ({
    todos: [] as Todo[],
  }),
  actions: {
    addTodo(text: string) {
      this.todos.push({
        id: Date.now(),
        text,
        completed: false,
      });
      this.saveToLocalStorage();
    },
    toggleTodo(id: number) {
      const todo = this.todos.find(todo => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
        this.saveToLocalStorage();
      }
    },
    deleteTodo(id: number) {
      this.todos = this.todos.filter(todo => todo.id !== id);
      this.saveToLocalStorage();
    },
    loadFromLocalStorage() {
      const storedTodos = localStorage.getItem('todos');
      if (storedTodos) {
        this.todos = JSON.parse(storedTodos);
      }
    },
    saveToLocalStorage() {
      localStorage.setItem('todos', JSON.stringify(this.todos));
    },
  },
});
