import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const Weekly = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    const newTask = { id: tasks.length + 1, text: "New Task" };
    setTasks([...tasks, newTask]);
  };

  const updateTaskText = (id, newText) => {
    setTasks(
      tasks.map((task) => (task.id === id ? { ...task, text: newText } : task))
    );
  };

  return (
    <main className="relative flex home-container">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div
        className={`flex-grow p-4 content ${isSidebarOpen ? "pl-72" : "pl-16"}`}
      >
        <div className="container px-4 py-16 mx-auto">
          <div>
            <h2>Plans For The Week</h2>
            <ul className="mb-2">
              {tasks.map((task) => (
                <li key={task.id} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`task${task.id}`}
                    className="rounded-full"
                  />
                  <input
                    type="text"
                    value={task.text}
                    onChange={(e) => updateTaskText(task.id, e.target.value)}
                    className="ml-2 leading-loose"
                  />
                </li>
              ))}
            </ul>
            <FaPlus
              className="cursor-pointer text-primary-500"
              onClick={addTask}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Weekly;
