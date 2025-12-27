const STORAGE_KEY = 'tasks';

const defaultTasks = [
  { id: 1, title: 'Complete project proposal', dueDate: '2025-01-05', status: 'pending' },
  { id: 2, title: 'Review code changes', dueDate: '2025-01-03', status: 'done' },
  { id: 3, title: 'Update documentation', dueDate: '2025-01-10', status: 'pending' }
];

export const TaskAPI = {
  getTasks: () => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultTasks;
    } catch (error) {
      console.error('Error loading tasks:', error);
      return defaultTasks;
    }
  },

  saveTasks: (tasks) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  }
};