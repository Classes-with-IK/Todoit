import React from "react";
import { useFilterStore } from "../store/filterStore";

export default function FilterBar() {
  const filter = useFilterStore((state) => state.filter);
  const setFilter = useFilterStore((state) => state.setFilter);

  const filterOptions = ["all", "Urgent", "Planning", "Personal"];

  const colors = {
    Urgent: "bg-[#FF6B6B] text-white",
    Planning: "bg-[#4ECDC4] text-[#2D3436]",
    Personal: "bg-[#FFE66D] text-[#2D3436]",
    all: "bg-[#B2BEC3] text-white",
  };

  return (
    <div className="flex items-center gap-2.5 pt-1 mb-6">
      <span className="text-[10px] font-black uppercase tracking-wider text-[#2D3436]/55 font-display">
        Filter:
      </span>
      {filterOptions.map((filterName) => {
        const isSelected = filter === filterName;
        const displayName = filterName === "all" ? "All" : filterName;
        return (
          <button
            key={filterName}
            type="button"
            onClick={() => setFilter(filterName)}
            className={`px-3 py-1 rounded-full text-xs font-black border-2 border-[#2D3436] cursor-pointer transition-all ${
              isSelected
                ? `${colors[filterName]} shadow-[2px_2px_0_0_#2D3436]`
                : "bg-white text-[#2D3436]/60 hover:bg-slate-50"
            }`}
          >
            {displayName}
          </button>
        );
      })}
    </div>
  );
}
