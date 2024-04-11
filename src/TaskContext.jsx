// TaskContext.js
import React, { createContext, useState, useEffect } from "react";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };
  
  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await response.json();
      setTasks(data); // Инициализация состояния tasks через контекст
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, setTasks }}>
      {children}
    </TaskContext.Provider>
  );
};

export { TaskProvider, TaskContext };
