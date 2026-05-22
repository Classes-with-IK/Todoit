import { create } from "zustand";

/**
 * WHY A SEPARATE STORE FOR FILTER?
 * The filter is a UI-only state preference that doesn't affect data persistence or the core todo logic.
 * Separating it keeps concerns isolated: todoStore owns the data model and mutations,
 * filterStore owns the UI view preference. This makes each store focused and easier to reason about.
 * Additionally, the filter doesn't need to persist between sessions (it's a per-session choice),
 * whereas todos do. Having separate stores lets us apply persist() only where it makes sense.
 * In a larger app, this pattern scales: search, sorting, pagination could each be their own store.
 */
export const useFilterStore = create((set) => ({
  filter: "all", // 'all' | 'Urgent' | 'Planning' | 'Personal'

  setFilter: (filter) => set({ filter }),
}));
