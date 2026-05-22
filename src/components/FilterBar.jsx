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
    <div className="filter-bar">
      {FILTERS.map((f) => (
        <button
          key={f}
          onClick={() => setFilter(f)}
          className={`filter-btn ${filter === f ? 'active' : ''}`}
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