import React from "react";

function TaskInput() {
  return (
    <div className="flex gap-2">
      <input className="input-title" type="text" placeholder="Enter a Task" />
      <button className="btn-primary">Add task</button>
    </div>
  );
}

export default TaskInput;
