import React from 'react';

export const FilterButtons = ({ filter, setFilter }) => {
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'pending', label: 'Pending' },
    { value: 'done', label: 'Done' }
  ];

  return (
    <div className="flex gap-2">
      {filters.map(({ value, label }) => (
        <button
          key={value}
          onClick={() => setFilter(value)}
          className={`px-4 py-2 rounded transition-colors ${
            filter === value
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
};