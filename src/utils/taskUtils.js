/**
 * Task Utility Functions
 * Pure functions for filtering, searching, and sorting tasks
 */

export const TaskUtils = {
  /**
   * Filter tasks by status
   * @param {Array} tasks - Array of tasks
   * @param {string} filter - Filter type ('all', 'pending', 'done')
   * @returns {Array} Filtered tasks
   */
  filterTasks: (tasks, filter) => {
    if (filter === 'all') return tasks;
    return tasks.filter(task => task.status === filter);
  },

  /**
   * Search tasks by title
   * @param {Array} tasks - Array of tasks
   * @param {string} searchTerm - Search query
   * @returns {Array} Filtered tasks matching search term
   */
  searchTasks: (tasks, searchTerm) => {
    if (!searchTerm) return tasks;
    const lowerSearch = searchTerm.toLowerCase();
    return tasks.filter(task =>
      task.title.toLowerCase().includes(lowerSearch)
    );
  },

  /**
   * Sort tasks by date or name
   * @param {Array} tasks - Array of tasks
   * @param {string} sortBy - Sort criteria ('date' or 'name')
   * @returns {Array} Sorted tasks
   */
  sortTasks: (tasks, sortBy) => {
    return [...tasks].sort((a, b) => {
      if (sortBy === 'date') {
        return new Date(a.dueDate) - new Date(b.dueDate);
      } else {
        return a.title.localeCompare(b.title);
      }
    });
  }
};