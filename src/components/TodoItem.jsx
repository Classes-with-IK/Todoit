import { useTodoStore } from '../store/todoStore'

const TYPE_COLORS = {
  Urgent:   { bg: '#fef2f2', text: '#ef4444', border: '#fecaca' },
  Planning: { bg: '#eff6ff', text: '#3b82f6', border: '#bfdbfe' },
  Personal: { bg: '#f0fdf4', text: '#10b981', border: '#bbf7d0' },
}

export default function TodoItem({ todo }) {
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const deleteTodo = useTodoStore((state) => state.deleteTodo)

  const colors = TYPE_COLORS[todo.type] || { bg: '#f8fafc', text: '#64748b', border: '#e2e8f0' }

  return (
    <li className={`todo-item ${todo.completed ? 'completed' : ''}`}>
      {/* Checkbox + text */}
      <label className="flex items-start gap-3 cursor-pointer sm:items-center flex-1 min-w-0">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
          className="mt-0.5 h-5 w-5 shrink-0 rounded accent-sky-500 cursor-pointer sm:mt-0"
        />
        <div className="min-w-0 flex-1">
          <p className={`text-sm leading-snug ${
            todo.completed
              ? 'line-through text-slate-400'
              : 'text-slate-800'
          }`}>
            {todo.text}
          </p>
          {/* Type badge */}
          <span
            className="mt-1.5 inline-flex rounded-full px-2.5 py-0.5 text-xs font-semibold uppercase tracking-wide"
            style={{
              backgroundColor: colors.bg,
              color: colors.text,
              border: `1px solid ${colors.border}`,
            }}
          >
            {todo.type}
          </span>
        </div>
      </label>

      {/* Delete */}
      <button
        onClick={() => deleteTodo(todo.id)}
        className="shrink-0 inline-flex items-center justify-center rounded-xl border border-rose-200 bg-rose-50 px-3 py-1.5 text-xs font-semibold text-rose-600 transition-colors hover:border-rose-300 hover:bg-rose-100"
      >
        Delete
      </button>
    </li>
  )
}