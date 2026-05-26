import { useFilterStore } from '../store/filterStore'

// Type → accent color mapping (consistent with TodoItem badges)
const ACCENT = {
  all:      '#64748b',
  Urgent:   '#ef4444',
  Planning: '#3b82f6',
  Personal: '#10b981',
}

const FILTERS = ['all', 'Urgent', 'Planning', 'Personal']

export default function FilterBar() {
  const filter    = useFilterStore((state) => state.filter)
  const setFilter = useFilterStore((state) => state.setFilter)

  return (
    <div className="filter-bar">
      {FILTERS.map((f) => {
        const isActive = filter === f
        return (
          <button
            key={f}
            onClick={() => setFilter(f)}
            // Use inline style only — no conflicting Tailwind color classes
            className="filter-btn"
            style={{
              borderColor: isActive ? ACCENT[f] : '#cbd5e1',
              backgroundColor: isActive ? ACCENT[f] : 'transparent',
              color: isActive ? '#ffffff' : ACCENT[f],
            }}
          >
            {f === 'all' ? 'All' : f}
          </button>
        )
      })}
    </div>
  )
}