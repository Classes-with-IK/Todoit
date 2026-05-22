import React, { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import FilterBar from "./components/FilterBar";
import TodoItem from "./components/TodoItem";
import TodoLegend from "./components/TodoLegend";
import { useTodoStore } from "./store/todoStore";
import { useFilterStore } from "./store/filterStore";

export default function App() {
  const todos = useTodoStore((state) => state.todos);
  const filter = useFilterStore((state) => state.filter);
  const addTodo = useTodoStore((state) => state.addTodo);
  const clearCompleted = useTodoStore((state) => state.clearCompleted);

  const activeCount = todos.filter((t) => !t.completed).length;

  const [text, setText] = useState("");
  const [type, setType] = useState("Urgent");

  const handleAdd = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text.trim(), type);
    setText("");
  };

  const completedCount = todos.filter((t) => t.completed).length;

  return (
    <div className="min-h-screen bg-[#FDFCF0] text-[#2D3436] py-12 px-4 flex flex-col items-center justify-center font-sans relative overflow-hidden">
      {/* Background ambient decorative shapes from styling sheet */}
      <div className="absolute top-[-50px] left-[-50px] w-64 h-64 bg-[#FFE66D] rounded-full opacity-60 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-80px] right-[-80px] w-96 h-96 bg-[#4ECDC4] rounded-full opacity-40 blur-3xl pointer-events-none"></div>

      <div className="relative w-full max-w-[600px] bg-white rounded-[40px] shadow-[0_32px_0_0_#FF6B6B,0_40px_80px_rgba(0,0,0,0.1)] border-4 border-[#2D3436] p-8 md:p-10 flex flex-col z-10 transition-all">
        {/* Header Component */}
        <Header />

        {/* Input Form with Priority Pickers */}
        <TodoForm
          text={text}
          setText={setText}
          type={type}
          setType={setType}
          onSubmit={handleAdd}
        />

        {/* Filter Bar */}
        <FilterBar />

        {/* Todo List space */}
        <div className="space-y-4 min-h-[150px]">
          {todos
            .filter((todo) => filter === "all" || todo.type === filter)
            .map((todo) => (
              <TodoItem key={todo.id} todo={todo} />
            ))}

          {todos.filter((todo) => filter === "all" || todo.type === filter)
            .length === 0 && (
            <div className="flex flex-col items-center justify-center py-10 text-center">
              <Sparkles className="text-[#FFE66D] mb-1" size={28} />
              <p className="font-extrabold text-[#2D3436] text-base">
                Perfect peace! No tasks.
              </p>
              <p className="text-xs text-[#636E72] font-semibold mt-0.5">
                Type one above to start!
              </p>
            </div>
          )}
        </div>

        {/* Footer info & action */}
        <div className="mt-8 pt-6 border-t-2 border-[#F1F2F6] flex justify-between items-center text-xs">
          <div className="font-black text-[#2D3436]/60 uppercase tracking-widest font-display">
            {todos.filter((t) => !t.completed).length} ACTIVE ITEM(S)
          </div>
          {completedCount > 0 && (
            <button
              onClick={clearCompleted}
              className="text-[#FF6B6B] hover:text-[#FF5252] font-black uppercase tracking-widest transition-colors cursor-pointer"
            >
              Clear Completed
            </button>
          )}
        </div>
      </div>

      {/* Legend Component */}
      <TodoLegend />
    </div>
  );
}
