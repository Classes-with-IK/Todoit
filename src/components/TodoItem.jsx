import { useTodoStore } from './store/todoStore'

const colors = {
  Urgent: '#ef4444',
  Planning: '#3b82f6',
  Personal: '#10b981',
}

export default function TodoItem({ todo }) {
  // Get actions from the store — no longer passed as props
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const deleteTodo = useTodoStore((state) => state.deleteTodo)

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        className="todo-checkbox"
      />

      <span className="todo-text">{todo.text}</span>

      <span
        className="todo-type-badge"
        style={{ backgroundColor: colors[todo.type] }}
      >
        {todo.type}
      </span>

      <button
        onClick={() => deleteTodo(todo.id)}
        className="delete-btn"
        aria-label="Delete task"
      >
        ✕
      </button>
    </li>
  )
}