// src/components/Header.jsx
import React from "react";
import { useTodoStore } from "../store/todoStore";
import { useFilterStore } from "../store/filterStore";

export default function Header() {
  const filter = useFilterStore((state) => state.filter);
  const todos = useTodoStore((state) => state.todos);

  const visibleTodos =
    filter === "all" ? todos : todos.filter((t) => t.type === filter);
  const completedCount = visibleTodos.filter((t) => t.completed).length;
  const totalCount = visibleTodos.length;

  return (
    <div className="flex justify-between items-end mb-8">
      <div>
        <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none mb-2">
          Daily Do's
        </h1>
        <p className="text-[#636E72] font-semibold text-base">
          Stay energetic, stay busy!
        </p>
      </div>
      <div className="bg-[#FFE66D] px-5 py-1.5 rounded-full border-2 border-[#2D3436] font-black text-lg shadow-[2px_2px_0_0_#2D3436]">
        {String(completedCount).padStart(2, "0")} /{" "}
        {String(totalCount).padStart(2, "0")}
      </div>
    </div>
  );
}
