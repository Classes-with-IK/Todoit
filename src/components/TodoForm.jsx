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
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        {TYPES.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>

      <button type="submit">Add Task</button>
    </form>
  )
}