import { makeAutoObservable } from "mobx";

class TaskStore {
  tasks = [];

  constructor() {
    makeAutoObservable(this);
  }

  loadData = async () => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      const data = await response.json();
      this.tasks = data;
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };

  handleAdd = async (value) => {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos/add",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json;charset=utf-8",
          },
          body: JSON.stringify({
            id: Math.random,
            todo: value,
            checked: false,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to fetch tasks");
      }
      this.loadData();
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };
}

export default TaskStore;
