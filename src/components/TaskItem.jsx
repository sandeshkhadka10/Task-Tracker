import React from 'react';
import { Edit2, Trash2 } from 'lucide-react';

/**
 * Task Item Component
 * Displays a single task with actions
 */
export const TaskItem = ({ task, onEdit, onDelete, onToggleStatus }) => {
  return (
    <div className="border rounded-lg p-4 mb-3 hover:shadow-md transition-shadow bg-white">
      <div className="flex justify-between items-start">
        <div className="flex-1">
          <h3 className="font-medium text-lg">{task.title}</h3>
          <p className="text-sm text-gray-600 mt-1">Due: {task.dueDate}</p>
          <span
            className={`inline-block mt-2 px-3 py-1 rounded-full text-xs font-medium ${
              task.status === 'done'
                ? 'bg-green-100 text-green-800'
                : 'bg-yellow-100 text-yellow-800'
            }`}
          >
            {task.status === 'done' ? 'Done' : 'Pending'}
          </span>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => onToggleStatus(task)}
            className="p-2 text-blue-500 hover:bg-blue-50 rounded transition-colors"
            title="Toggle Status"
          >
            {task.status === 'done' ? '↩' : '✓'}
          </button>
          <button
            onClick={() => onEdit(task)}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded transition-colors"
            title="Edit Task"
          >
            <Edit2 size={16} />
          </button>
          <button
            onClick={() => onDelete(task.id)}
            className="p-2 text-red-500 hover:bg-red-50 rounded transition-colors"
            title="Delete Task"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};