import React from "react";

import "./App.css";
import TodoBar from "./TodoBar";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { TaskProvider } from "./TaskContext";

function App() {
  return (
    <TaskProvider>
      <div className='App'>
        <TodoBar />
        <TodoAdd />
        <TodoList />
      </div>
    </TaskProvider>
  );
}

export default App;
