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
    {
      name: "basic_todos", // Keep same key for existing users

      /**
       * WHY PARTIALIZE?
       * As the store grows, we only want to persist the data (todos), not:
       * - Action functions (they're recreated on hydration anyway)
       * - Computed values or derived state
       * - UI-only state (like filters)
       *
       * Benefits:
       * 1. Smaller localStorage footprint - only essential data
       * 2. Prevents accidental persistence of non-serializable data
       * 3. Clear separation between persisted data and runtime behavior
       * 4. Faster hydration since we load less data
       *
       * Without partialize, persist stores the entire state object including all actions.
       * While persist automatically strips functions, partialize makes the intent explicit
       * and future-proofs against accidentally adding non-data fields to the store.
       */
      partialize: (state) => ({ todos: state.todos }),

      // Optional: Handle migration from old localStorage format
      // migrate: (persistedState, version) => {
      //   // If migrating from old format (just array), convert it
      //   if (Array.isArray(persistedState)) {
      //     return { todos: persistedState };
      //   }
      //   return persistedState;
      // },
    },
  ),
);
