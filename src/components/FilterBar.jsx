import { useFilterStore } from '../store/FilterStore';

export default function FilterBar() {
  const { filter, setFilter } = useFilterStore();
  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Urgent', value: 'Urgent' },
    { label: 'Planning', value: 'Planning' },
    { label: 'Personal', value: 'Personal' },
  ];

  return (
    <div className="flex gap-2 mb-8 bg-[#F1F2F6] p-2 rounded-2xl border-2 border-[#2D3436]">
      {filters.map((f) => (
        <button
          key={f.value}
          onClick={() => setFilter(f.value)}
          className={`flex-1 py-2 rounded-xl font-black text-sm transition-all cursor-pointer ${
            filter === f.value
              ? 'bg-white text-[#FF6B6B] shadow-[2px_2px_0_0_#2D3436] border-2 border-[#2D3436]'
              : 'text-[#636E72] hover:bg-white/50'
          }`}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}