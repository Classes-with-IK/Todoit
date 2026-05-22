// src/store/todoStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useTodoStore = create(
  persist(
    (set) => ({
      todos: [
        {
          id: 1,
          text: "Buy fresh coffee beans",
          completed: true,
          type: "Urgent",
        },
        {
          id: 2,
          text: "Design the mobile interface mockup",
          completed: false,
          type: "Planning",
        },
        {
          id: 3,
          text: "Call Sarah for project sync",
          completed: false,
          type: "Personal",
        },
      ],

      addTodo: (text, type) =>
        set((state) => ({
          todos: [
            ...state.todos,
            { id: Date.now(), text, completed: false, type },
          ],
        })),

      toggleTodo: (id) =>
        set((state) => ({
          todos: state.todos.map((t) =>
            t.id === id ? { ...t, completed: !t.completed } : t,
          ),
        })),

      deleteTodo: (id) =>
        set((state) => ({
          todos: state.todos.filter((t) => t.id !== id),
        })),

      clearCompleted: () =>
        set((state) => ({
          todos: state.todos.filter((t) => !t.completed),
        })),
    }),
    { name: "basic_todos" },
  ),
);
