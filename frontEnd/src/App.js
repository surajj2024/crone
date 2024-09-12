import React, { useState, useEffect } from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("/api/tasks");
    const data = await res.json();
    setTasks(data);
  };

  const addTask = async (task) => {
    await fetch("/api/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    });
    fetchTasks();
  };

  return (
    <div>
      <h1>Task Scheduler</h1>
      <AddTask onAddTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;
