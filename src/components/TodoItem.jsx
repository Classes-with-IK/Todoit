import { useTodoStore } from '../store/todoStore'

export default function TodoItem({ todo }) {
  const toggleTodo = useTodoStore((state) => state.toggleTodo)
  const deleteTodo = useTodoStore((state) => state.deleteTodo)

  return (
    <li className="todo-item">
      <div>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => toggleTodo(todo.id)}
        />

        <span
          style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
          }}
        >
          {todo.text}
        </span>

        <small className="todo-type">{todo.type}</small>
      </div>

      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  )
}