import { useState } from 'react'
import { useTodoStore } from '../store/todoStore'

const TYPES = ['Urgent', 'Planning', 'Personal']

export default function TodoForm() {
  const addTodo = useTodoStore((state) => state.addTodo)

  const [text, setText] = useState('')
  const [type, setType] = useState('Urgent')

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!text.trim()) return

    addTodo({
      id: Date.now(),
      text,
      type,
      completed: false,
    })

    setText('')
  }

  return (
    <form
      className="grid gap-4 rounded-3xl border border-slate-700 bg-slate-900/80 p-4 shadow-inner shadow-slate-950/10 sm:grid-cols-[1fr_auto] sm:items-end"
      onSubmit={handleSubmit}
    >
      <div className="grid gap-3 sm:grid-cols-[1fr_180px] sm:items-center">
        <input
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
          type="text"
          placeholder="Enter a task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <select
          className="w-full rounded-2xl border border-slate-700 bg-slate-950/90 px-4 py-3 text-slate-100 outline-none transition focus:border-sky-400 focus:ring-2 focus:ring-sky-500/20"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {TYPES.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>

      <button className="inline-flex items-center justify-center rounded-2xl bg-sky-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-sky-400" type="submit">
        Add Task
      </button>
    </form>
  )
}
