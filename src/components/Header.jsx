import { useTodoStore } from '../store/todoStore'

export default function Header() {
  const todos = useTodoStore((state) => state.todos)

  const completedCount = todos.filter((t) => t.completed).length
  const totalCount = todos.length

  return (
    <header className="rounded-3xl border border-slate-700 bg-slate-900/80 px-6 py-6 shadow-sm shadow-slate-950/10 sm:flex sm:items-center sm:justify-between">
      <div className="space-y-1">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-50">Todoit</h1>
        <p className="text-sm text-slate-400">A simple Tailwind-powered todo experience.</p>
      </div>

      <p className="mt-4 text-sm text-slate-400 sm:mt-0">
        {completedCount} / {totalCount} completed
      </p>
    </header>
  )
}
