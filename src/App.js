import React from "react";

import "./App.css";
import TodoBar from "./TodoBar";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
// import { TaskProvider } from "./TaskContext";
import TaskStore from "./TaskStore";
import { Provider } from "mobx-react";

const store = {
  tasksStore: new TaskStore(),
};

function App() {
  return (
    <Provider {...store}>
      <div className='App'>
        <TodoBar />
        <TodoAdd />
        <TodoList />
      </div>
    </Provider>
  );
}

export default App;
