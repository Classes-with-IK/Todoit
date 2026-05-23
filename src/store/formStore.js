import { create } from "zustand";

const useFormStore = create((set) => ({
  text: "",
  type: "Urgent",
  setText: (value) => set({ text: value }),
  setType: (value) => set({ type: value }),
  reset: () => set({ text: "", type: "Urgent" }),
}));

export { useFormStore };
