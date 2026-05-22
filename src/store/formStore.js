
import { create } from 'zustand'

export const useFormStore = create((set) => ({
  text: '',
  type: 'Urgent',
  setText: (value) => set({ text: value }),
  setType: (value) => set({ type: value }),
  reset: () => set({ text: '', type: 'Urgent' }),
}))