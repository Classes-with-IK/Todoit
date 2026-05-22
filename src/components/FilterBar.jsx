// src/components/FilterBar.jsx
import React from "react";
import { useFilterStore } from "../store/filterStore";

export default function FilterBar() {
  const { filter, setFilter } = useFilterStore();

  const filters = [
    { label: "All", value: "all" },
    { label: "Urgent", value: "Urgent" },
    { label: "Planning", value: "Planning" },
    { label: "Personal", value: "Personal" },
  ];

  const colors = {
    Urgent: "bg-[#FF6B6B] text-white",
    Planning: "bg-[#4ECDC4] text-[#2D3436]",
    Personal: "bg-[#FFE66D] text-[#2D3436]",
    all: "bg-[#2D3436] text-white",
  };

  return (
    <div className="flex items-center gap-2.5 mb-6 pb-2 border-b-2 border-[#F1F2F6]">
      <span className="text-[10px] font-black uppercase tracking-wider text-[#2D3436]/55 font-display">
        Filter:
      </span>
      <div className="flex flex-wrap gap-2">
        {filters.map(({ label, value }) => {
          const isSelected = filter === value;
          const isColorFilter = value !== "all";

          return (
            <button
              key={value}
              type="button"
              onClick={() => setFilter(value)}
              className={`px-3 py-1 rounded-full text-xs font-black border-2 border-[#2D3436] cursor-pointer transition-all ${
                isSelected
                  ? isColorFilter
                    ? `${colors[value]} shadow-[2px_2px_0_0_#2D3436]`
                    : colors[value]
                  : "bg-white text-[#2D3436]/60 hover:bg-slate-50"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
