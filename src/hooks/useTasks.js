import { useState, useEffect } from 'react';
import { TaskAPI } from '../services/taskAPI';

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

  const addTask = (taskData) => {
    const newTask = {
      ...taskData,
      id: Date.now()
    };
    setTasks(prevTasks => [...prevTasks, newTask]);
  };

  const updateTask = (id, taskData) => {
    setTasks(prevTasks =>
      prevTasks.map(task =>
        task.id === id ? { ...taskData, id } : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
  };


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