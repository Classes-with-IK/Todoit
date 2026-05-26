import { useState } from 'react'
import { useTodoStore } from '../store/todoStore'

const TYPES = ['Urgent', 'Planning', 'Personal']

export default function TodoForm() {
  const addTodo = useTodoStore((state) => state.addTodo)

  const [text, setText] = useState('')
  const [type, setType] = useState('Urgent')

  const handleSubmit = (e) => {
    e.preventDefault()
    const trimmedText = text.trim()
    if (!trimmedText) return

    addTodo({
  id: crypto.randomUUID(), // ✅ guaranteed unique
  text: trimmedText,
  type,
  completed: false,
})
    setText('')
  }

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {/* Input + select row */}
      <div className="todo-form-fields">
        <input
          className="todo-input"
          type="text"
          placeholder="What needs to be done?"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <select
          className="todo-select"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          {TYPES.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>

      <button className="submit-btn" type="submit">
        Add Task
      </button>
    </form>
  )
}