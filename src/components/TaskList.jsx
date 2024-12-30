import React from "react";

const TaskList = () => {
  const tasks = [
    { id: 1, title: "Read a book", completed: true },
    { id: 2, title: "Workout", completed: false },
    { id: 3, title: "Learn React", completed: false },
  ];
  return (
    <div>
      <ul className="mt-10 space-y-2">
        {tasks.map((task) => (
          <li key={task.id} className="p-4 border rounded-lg ">
            <span className={task.completed ? "line-through" : ""}>
              {task.title}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
