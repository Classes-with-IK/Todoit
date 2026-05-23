import Header from './components/Header'
import TodoForm from './components/TodoForm'
import FilterBar from './components/FilterBar'
import TodoItem from './components/TodoItem'

import { useTodoStore } from './store/todoStore'
import { useFilterStore } from './store/filterStore'

export default function App() {
  const todos = useTodoStore((state) => state.todos)
  const clearCompleted = useTodoStore((state) => state.clearCompleted)

  const filter = useFilterStore((state) => state.filter)

  const visibleTodos =
    filter === 'all'
      ? todos
      : todos.filter((todo) => todo.type === filter)

  const activeCount = todos.filter((todo) => !todo.completed).length
  const completedCount = todos.filter((todo) => todo.completed).length

  return (
    <div className="app-container">
      <div className="app">
        <Header />
        <TodoForm />
        <FilterBar />

        <ul className="space-y-3">
          {visibleTodos.length === 0 ? (
            <li className="rounded-3xl border border-dashed border-slate-700 bg-slate-900/80 px-6 py-10 text-center text-slate-400">
              {filter === 'all'
                ? 'Perfect peace! No tasks.'
                : `No ${filter} tasks right now.`}
            </li>
          ) : (
            visibleTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          )}
        </ul>

        <footer className="mt-6 flex flex-col gap-3 rounded-3xl border border-slate-700 bg-slate-950/70 px-5 py-4 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>
            {activeCount} task{activeCount !== 1 ? 's' : ''} left
          </span>

          {completedCount > 0 && (
            <button onClick={clearCompleted} className="clear-btn">
              Clear Completed ({completedCount})
            </button>
          )}
        </footer>
      </div>
    </div>
  )
}
