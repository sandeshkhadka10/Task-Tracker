import React from 'react';
import { TaskItem } from './TaskItem';

export const TaskList = ({ tasks, onEdit, onDelete, onToggleStatus }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        No tasks found. Add your first task!
      </div>
    );
  }

  return (
    <div>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
          onToggleStatus={onToggleStatus}
        />
      ))}
    </div>
  );
};