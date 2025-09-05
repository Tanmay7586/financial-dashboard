'use client'
import { useState } from 'react'

const timeRanges = ['3 Days', '7 Days', '10 Days', '30 Days']

export default function TimeFilter({ onFilterChange, loading }) {
  const [activeFilter, setActiveFilter] = useState('7 Days')

  const handleFilterClick = (filter) => {
    setActiveFilter(filter)
    onFilterChange(filter)
  }

  return (
    <div className="flex flex-wrap items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
            {timeRanges.map((range) => (
                <button
                key={range}
                onClick={() => handleFilterClick(range)}
                disabled={loading}
                className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 ${
                    activeFilter === range
                    ? 'bg-red-600 text-white'
                    : 'bg-white hover:bg-gray-100 border border-gray-300 text-gray-600'
                } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                {range}
                </button>
            ))}
        </div>
        <button className="btn-view-report">View Report</button>
    </div>
  )
}
