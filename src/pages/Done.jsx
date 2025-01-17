import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Done = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [completedTasks] = useState([
    { id: 1, text: "Completed Task 1" },
    { id: 2, text: "Completed Task 2" },
    { id: 3, text: "Completed Task 3" },
  ]);

  return (
    <main className="relative flex home-container">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div
        className={`flex-grow p-4 content ${isSidebarOpen ? "pl-72" : "pl-16"}`}
      >
        <div className="container px-4 py-16 mx-auto">
          <div>
            <h2>Completed Tasks</h2>
            <ul className="mb-2">
              {completedTasks.map((task) => (
                <li key={task.id} className="flex items-center">
                  <span className="ml-2 leading-loose">{task.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Done;
