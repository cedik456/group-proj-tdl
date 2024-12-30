import React, { useState } from "react";
import TaskInput from "./components/TaskInput";
// import TaskList from "./components/TaskList";
import { Input } from "postcss";


function App() {
    return (
        <div>
            <h1>To-Do List</h1>
            <TaskInput />
        </div>
    );

}

export default App;