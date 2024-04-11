
import React, { useContext, useState } from 'react';
import { TaskContext } from './TaskContext';

const TodoAdd = () => {
  const { addTask } = useContext(TaskContext);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (newTaskTitle.trim() === '') return; // Проверка на пустую строку

    addTask({ id: Math.random(), title: newTaskTitle, completed: false });
    setNewTaskTitle(''); // Очистка поля ввода после добавления задачи
  };

  return (
    <div className="todo-add">
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Enter task..."
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </div>
  );
};

export default TodoAdd;
