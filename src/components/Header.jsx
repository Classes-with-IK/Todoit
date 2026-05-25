import { useTodoStore } from '../store/todoStore'

export default function Header() {
  const todos = useTodoStore((state) => state.todos)
  const completedCount = todos.filter((t) => t.completed).length
  const totalCount = todos.length

  return (
    <header className="header">
      <div>
        <h1>Todoit</h1>
        <p className="text-sm text-slate-500 mt-0.5">
          Stay on top of things.
        </p>
      </div>
      <p className="header-stats">
        {completedCount} / {totalCount} completed
      </p>
    </header>
  )
}