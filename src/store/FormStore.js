import { create } from 'zustand';

export const useFormStore = create((set) => ({
  text: '',
  type: 'Urgent',
  setText: (text) => set({ text }),
  setType: (type) => set({ type }),
  reset: () => set({ text: '', type: 'Urgent' }),
}));