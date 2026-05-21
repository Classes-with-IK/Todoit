// Why is the filter in a separate store instead of inside todoStore?
//
// The filter is view/session state — it describes *how* the user is
// looking at the data, not the data itself. Keeping it separate means:
//
//   1. Single Responsibility: todoStore owns domain data (the todos array).
//      filterStore owns UI preference. Each store does one job.
//
//   2. Persistence is cleaner. In Part 3, todoStore will persist to
//      localStorage. The filter intentionally does NOT persist — it should
//      reset to 'all' every session. Mixing them in one store would mean
//      fighting persist to exclude the filter field.
//
//   3. Components that only care about the filter (FilterBar) won't
//      re-render when todos change, and vice-versa.

import { create } from 'zustand'

export const useFilterStore = create((set) => ({
  filter: 'all', // 'all' | 'Urgent' | 'Planning' | 'Personal'
  setFilter: (filter) => set({ filter }),
}))