import { useTodoStore } from '../store/todoStore'

export default function TodoItem({ todo }) {
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const deleteTodo = useTodoStore((state) => state.deleteTodo)

  return (
    <li className="flex flex-col gap-4 rounded-3xl border border-slate-700 bg-slate-900/80 p-4 shadow-sm shadow-slate-950/10 sm:flex-row sm:items-center sm:justify-between">
      <label className="flex items-start gap-3 sm:items-center">
        <input
          className="mt-1 h-5 w-5 shrink-0 rounded border-slate-700 bg-slate-950 text-sky-500 outline-none transition duration-150 focus:ring-2 focus:ring-sky-500/20"
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <div className="min-w-0">
          <p className={`text-sm ${todo.completed ? 'text-slate-500 line-through' : 'text-slate-100'}`}>
            {todo.text}
          </p>
          <span className="mt-2 inline-flex rounded-full bg-slate-800 px-3 py-1 text-xs uppercase tracking-[0.12em] text-slate-400">
            {todo.type}
          </span>
        </div>
      </label>

      <button
        className="inline-flex items-center justify-center rounded-2xl border border-rose-500/20 bg-rose-500/5 px-4 py-2 text-sm font-semibold text-rose-200 transition hover:border-rose-400/40 hover:bg-rose-500/10"
        onClick={() => deleteTodo(todo.id)}
      >
        Delete
      </button>
    </li>
  )
}
