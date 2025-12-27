import React from 'react';
import { SearchBar } from './SearchBar';
import { FilterButtons } from './FilterButtons';
import { SortDropdown } from './SortDropdown';

export const Filters = ({ filter, setFilter, sortBy, setSortBy, searchTerm, setSearchTerm }) => {
  return (
    <div className="mb-6 space-y-3">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="flex gap-3 flex-wrap items-center">
        <FilterButtons filter={filter} setFilter={setFilter} />
        <SortDropdown sortBy={sortBy} setSortBy={setSortBy} />
      </div>
    </div>
  );
};