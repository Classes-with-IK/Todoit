import Header from './components/Header'
import TodoForm from './components/TodoForm'
import FilterBar from './components/FilterBar'
import TodoItem from './components/TodoItem'
import TodoLegend from './components/TodoLegend'
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

        <ul className="space-y-3 list-none p-0 m-0">
          {visibleTodos.length === 0 ? (
            <li className="empty-state">
              {filter === 'all'
                ? '🌿 Perfect peace! No tasks.'
                : `No ${filter} tasks right now.`}
            </li>
          ) : (
            visibleTodos.map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))
          )}
        </ul>

        <footer className="footer">
          <span>
            {activeCount} task{activeCount !== 1 ? 's' : ''} left
          </span>
          {completedCount > 0 && (
            <button onClick={clearCompleted} className="clear-btn">
              Clear Completed ({completedCount})
            </button>
          )}
        </footer>

        <TodoLegend />
      </div>
    </div>
  )
}