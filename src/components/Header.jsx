import React from 'react';
import { Plus } from 'lucide-react';

/**
 * Header Component
 * Displays app title and add task button
 */
export const Header = ({ onAddTask }) => {
  return (
    <div className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold text-gray-800">Task Tracker</h1>
      <button
        onClick={onAddTask}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 flex items-center gap-2 transition-colors"
      >
        <Plus size={20} />
        Add Task
      </button>
    </div>
  );
};