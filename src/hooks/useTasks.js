import { useState, useEffect } from 'react';
import { TaskAPI } from '../services/taskAPI';

/**
 * Custom hook for managing tasks
 * Handles all CRUD operations for tasks
 */
export const useTasks = () => {
  const [tasks, setTasks] = useState([]);

  // Load tasks on mount
  useEffect(() => {
    setTasks(TaskAPI.getTasks());
  }, []);

  // Save tasks whenever they change
  useEffect(() => {
    if (tasks.length > 0) {
      TaskAPI.saveTasks(tasks);
    }
  }, [tasks]);

  /**
   * Add a new task
   * @param {Object} taskData - Task data without ID
   */
  const addTask = (taskData) => {
    const newTask = {
      ...taskData,
      id: Date.now()
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  /**
   * Update an existing task
   * @param {number} id - Task ID
   * @param {Object} taskData - Updated task data
   */
  const updateTask = (id, taskData) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...taskData, id } : task
      )
    );
  };

  /**
   * Delete a task
   * @param {number} id - Task ID to delete
   */
  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };

  /**
   * Toggle task status between pending and done
   * @param {Object} task - Task object to toggle
   */
  const toggleTaskStatus = (task) => {
    setTasks(prevTasks =>
      prevTasks.map(t =>
        t.id === task.id
          ? { ...t, status: t.status === 'done' ? 'pending' : 'done' }
          : t
      )
    );
  };

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask,
    toggleTaskStatus
  };
};