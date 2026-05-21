import { useState } from 'react'
import Header from './components/Header'
import TodoForm from './components/TodoForm'
import FilterBar from './components/FilterBar'
import TodoItem from './components/TodoItem'
import { useTodoStore } from './store/todoStore'
import { useFilterStore } from './store/filterStore'

export default function App() {
  // text and type stay as local form state for now (moved in Part 4)
  const [text, setText] = useState('')
  const [type, setType] = useState('Urgent')

  const todos = useTodoStore((state) => state.todos)
  const addTodo = useTodoStore((state) => state.addTodo)
  const clearCompleted = useTodoStore((state) => state.clearCompleted)

  const filter = useFilterStore((state) => state.filter)

  // Derive which todos are visible based on the active filter
  const visibleTodos =
    filter === 'all' ? todos : todos.filter((t) => t.type === filter)

  const handleAdd = (e) => {
    e.preventDefault()
    if (!text.trim()) return
    addTodo(text.trim(), type)
    setText('')
  }

  const activeCount = todos.filter((t) => !t.completed).length
  const completedCount = todos.filter((t) => t.completed).length

  return (
    <div className="app">
      <Header />

      <TodoForm
        text={text}
        setText={setText}
        type={type}
        setType={setType}
        onSubmit={handleAdd}
      />

      {/* FilterBar sits between the form and the todo list */}
      <FilterBar />

      <ul className="todo-list">
        {visibleTodos.length === 0 ? (
          <p className="empty-state">
            {filter === 'all'
              ? 'Perfect peace! No tasks.'
              : `No ${filter} tasks right now.`}
          </p>
        ) : (
          visibleTodos.map((todo) => (
            <TodoItem key={todo.id} todo={todo} />
          ))
        )}
      </ul>

      <footer className="footer">
        <span>{activeCount} task{activeCount !== 1 ? 's' : ''} left</span>
        {completedCount > 0 && (
          <button onClick={clearCompleted} className="clear-btn">
            Clear Completed ({completedCount})
          </button>
        )}
      </footer>
    </div>
  )
}