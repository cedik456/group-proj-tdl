import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
// import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="container mt-[150px] items-center flex justify-center mx-auto">
      <div className="card">
        <TaskInput />
        <TaskList />
      </div>
    </div>
  );
}

export default App;
