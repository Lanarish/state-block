import React from "react";

import "./App.css";
import TodoBar from "./TodoBar";
import TodoAdd from "./TodoAdd";
import TodoList from "./TodoList";
import { TaskProvider } from "./TaskContext";
import Table from "./Table";
import { WordsProvider } from "./WordsContext";

function App() {
  return (
    <TaskProvider>
      <div className='App'>
        <WordsProvider>
          <Table />
        </WordsProvider>
        {/* <TodoBar />
        <TodoAdd />
        <TodoList /> */}
      </div>
    </TaskProvider>
  );
}

export default App;
