import React, { useState, useCallback } from 'react';
import { Header } from './components/Header';
import { Filters } from './components/Filters';
import { TaskList } from './components/TaskList';
import { TaskForm } from './components/TaskForm';
import { useTasks } from './hooks/useTasks';
import { useDebounce } from './hooks/useDebounce';
import { TaskUtils } from './utils/taskUtils';

/**
 * Main App Component
 * Orchestrates all components and manages application state
 */
function App() {
  const { tasks, addTask, updateTask, deleteTask, toggleTaskStatus } = useTasks();
  const [filter, setFilter] = useState('all');
  const [sortBy, setSortBy] = useState('date');
  const [searchTerm, setSearchTerm] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);

  const debouncedSearch = useDebounce(searchTerm, 300);

  /**
   * Process tasks through filtering, searching, and sorting
   */
  const getProcessedTasks = useCallback(() => {
    let processed = tasks;
    processed = TaskUtils.filterTasks(processed, filter);
    processed = TaskUtils.searchTasks(processed, debouncedSearch);
    processed = TaskUtils.sortTasks(processed, sortBy);
    return processed;
  }, [tasks, filter, debouncedSearch, sortBy]);

  const handleSave = (taskData) => {
    if (editingTask) {
      updateTask(editingTask.id, taskData);
    } else {
      addTask(taskData);
    }
    setShowForm(false);
    setEditingTask(null);
  };

  const handleEdit = (task) => {
    setEditingTask(task);
    setShowForm(true);
  };

  const handleAddTask = () => {
    setEditingTask(null);
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
    setEditingTask(null);
  };

  const processedTasks = getProcessedTasks();

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <Header onAddTask={handleAddTask} />

        <Filters
          filter={filter}
          setFilter={setFilter}
          sortBy={sortBy}
          setSortBy={setSortBy}
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
        />

        <TaskList
          tasks={processedTasks}
          onEdit={handleEdit}
          onDelete={deleteTask}
          onToggleStatus={toggleTaskStatus}
        />

        {showForm && (
          <TaskForm
            task={editingTask}
            onSave={handleSave}
            onCancel={handleCloseForm}
          />
        )}
      </div>
    </div>
  );
}

export default App;