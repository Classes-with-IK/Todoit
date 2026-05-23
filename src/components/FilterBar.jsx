import { useFilterStore } from '../store/filterStore'

const colors = {
  all: '#6b7280',
  Urgent: '#ef4444',
  Planning: '#3b82f6',
  Personal: '#10b981',
}

const FILTERS = ['all', 'Urgent', 'Planning', 'Personal']

export default function FilterBar() {
  const filter = useFilterStore((state) => state.filter)
  const setFilter = useFilterStore((state) => state.setFilter)

  return (
    <div className="flex flex-wrap gap-2 rounded-3xl border border-slate-700 bg-slate-900/80 p-4 shadow-sm shadow-slate-950/10">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
            filter === f
              ? 'border-transparent bg-slate-100 text-slate-950'
              : 'border-slate-700 bg-transparent text-slate-300 hover:border-slate-500 hover:text-slate-100'
          }`}
          style={{
            borderColor: colors[f],
            backgroundColor: filter === f ? colors[f] : 'transparent',
            color: filter === f ? '#fff' : colors[f],
          }}
        >
          {f === 'all' ? 'All' : f}
        </button>
      ))}
    </div>
  )
}
