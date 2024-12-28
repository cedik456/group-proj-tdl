import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

//PATUROGA NA NGANAY AKO NIGGA

function App() {
  const [tasks, setTasks] = useState([]);
  const addTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) => 
        task.id === id 
          ? { ...task, completed: !task.completed } 
          : task
      )
    );
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <div className="min-h-screen py-8 bg-gray-100">
      <div className="max-w-md p-6 mx-auto bg-white shadow-md rounded-xl">
        <h1 className="mb-4 text-2xl font-bold text-center">Todo List</h1>
        <TaskInput onAddTask={addTask} />
        <TaskList 
          tasks={tasks} 
          onToggleComplete={toggleComplete} 
          onDelete={deleteTask} 
        />
      </div>
    </div>
  );
}

export default App;