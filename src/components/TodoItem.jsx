import React from "react";
import { Check } from "lucide-react";
import { useTodoStore } from "../store/todoStore";

export default function TodoItem({ todo }) {
  const labelColors = {
    Urgent: "bg-[#FF6B6B] text-white",
    Planning: "bg-[#4ECDC4] text-[#2D3436]",
    Personal: "bg-[#FFE66D] text-[#2D3436]",
  };

  const toggleTodo = useTodoStore((state) => state.toggleTodo);
  const deleteTodo = useTodoStore((state) => state.deleteTodo);

  return (
    <div
      className={`flex items-center gap-4 border-2 border-[#2D3436] p-4 rounded-3xl transition-all ${
        todo.completed
          ? "bg-[#F9F9F9] opacity-60 text-[#B2BEC3] border-[#2D3436]/50"
          : "bg-white shadow-[4px_4px_0_0_#2D3436]"
      }`}
    >
      <button
        type="button"
        onClick={() => toggleTodo(todo.id)}
        className={`w-8 h-8 rounded-lg border-2 border-[#2D3436] cursor-pointer transition-all flex items-center justify-center shrink-0 ${
          todo.completed ? "bg-[#4ECDC4]" : "bg-white hover:bg-[#FFE66D]/20"
        }`}
      >
        {todo.completed && (
          <Check size={16} strokeWidth={4} className="text-white" />
        )}
      </button>

      <div className="flex-1 min-w-0 flex flex-col gap-1">
        <span
          onClick={() => toggleTodo(todo.id)}
          className={`font-bold text-base md:text-lg break-words select-none cursor-pointer ${
            todo.completed ? "line-through text-[#B2BEC3]" : "text-[#2D3436]"
          }`}
        >
          {todo.text}
        </span>
        <div className="flex">
          <span
            className={`text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-full border border-[#2D3436] ${
              todo.completed
                ? "bg-slate-100 text-slate-400 border-slate-300"
                : labelColors[todo.type]
            }`}
          >
            {todo.type}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={() => deleteTodo(todo.id)}
        className="text-[#FF6B6B] hover:text-[#FF5252] font-black cursor-pointer px-1.5 py-1 text-lg transition-transform active:scale-90"
      >
        ✕
      </button>
    </div>
  );
}
