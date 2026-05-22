import { useTodoStore } from '../store/todoStore'

export default function Header() {
  const todos = useTodoStore((state) => state.todos)

  const completedCount = todos.filter((t) => t.completed).length
  const totalCount = todos.length

  return (
    <header className="header">
      <h1>Todoit</h1>

      <p className="header-stats">
        {completedCount} / {totalCount} completed
      </p>
    </header>
  )
}