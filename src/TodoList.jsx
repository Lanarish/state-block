import React, { useContext } from "react";
import { TaskContext } from "./TaskContext";

const TodoList = () => {
  const { tasks, setTasks } = useContext(TaskContext);

  const handleDeleteTask = async (taskId) => {
    try {
      // Отправка DELETE-запроса для удаления задачи на сервере
      const response = await fetch(`https://your-api-url/tasks/${taskId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete task");
      }

      // Если задача успешно удалена на сервере, удаляем ее локально
      setTasks(tasks.filter((task) => task.id !== taskId));
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  return (
    <div className='todo-list'>
      {tasks.map((task) => (
        <div key={task.id} className='todo-item'>
          <input type='checkbox' checked={task.completed} readOnly />
          <span>{task.title}</span>
          <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
