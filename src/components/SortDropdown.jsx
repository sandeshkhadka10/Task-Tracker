import React from 'react';

/**
 * Sort Dropdown Component
 * Dropdown for selecting sort criteria
 */
export const SortDropdown = ({ sortBy, setSortBy }) => {
  return (
    <select
      value={sortBy}
      onChange={(e) => setSortBy(e.target.value)}
      className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="date">Sort by Date</option>
      <option value="name">Sort by Name</option>
    </select>
  );
};