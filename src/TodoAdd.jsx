import React, { useContext, useState, useEffect } from "react";
import { inject, observer } from "mobx-react";
// import { TaskContext } from './TaskContext';

const TodoAdd = ({ handleAdd }) => {
  // const { addTask } = useContext(TaskContext);
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setNewTaskTitle(value);
  };

  const handleAddTask = (e) => {
    e.preventDefault();
    handleAdd(newTaskTitle);
    
 
  };
  return (
    <div className='todo-add'>
      <form onSubmit={handleAddTask}>
        <input
          type='text'
          placeholder='Enter task...'
          value={newTaskTitle}
          onChange={handleChange}
        />
        <button type='submit'>Add Task</button>
      </form>
    </div>
  );
};

export default inject(({ tasksStore }) => {
  const { tasks, loadData, handleAdd } = tasksStore;

  useEffect(() => {
    loadData();
  }, []);

  return {
    tasks,
    loadData,
    handleAdd,
  };
})(observer(TodoAdd));
