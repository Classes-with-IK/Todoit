// src/store/formStore.js
import { create } from "zustand";

/**
 * WAS SPLITTING INTO SEPARATE STORES THE RIGHT CALL?
 *
 * Yes, splitting into separate stores is the right call for this app.
 *
 * - todoStore holds the core todo data and persistence logic.
 * - filterStore holds temporary view state for filtering.
 * - formStore holds transient input state used only by TodoForm.
 *
 * This avoids mixing persistent data with UI-only state, keeps each store
 * focused, and reduces the chance that unrelated components re-render when
 * only form input changes. A single combined store would work, but it would
 * be less modular and harder to maintain as the app grows.
 */

export const useFormStore = create((set) => ({
  text: "",
  type: "Urgent",

  setText: (text) => set({ text }),

  setType: (type) => set({ type }),

  reset: () => set({ text: "", type: "Urgent" }),
}));
