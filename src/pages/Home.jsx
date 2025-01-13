import { FaPlus } from "react-icons/fa";
import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <main className="relative flex home-container">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div
        className={`flex-grow p-4 content ${isSidebarOpen ? "pl-72" : "pl-16"}`}
      >
        <div className="container px-4 py-16 mx-auto">
          <div>
            <h2>Plans For Today</h2>
            <ul className="mb-2">
              <li className="flex items-center">
                <input type="checkbox" id="task1" className="rounded-full" />
                <label htmlFor="task1" className="ml-2 leading-loose">
                  Lorem ipsum Lorem ipsum Lorem ipsum
                </label>
              </li>
              <li className="flex items-center">
                <input type="checkbox" id="task2" className="rounded-full" />
                <label htmlFor="task2" className="ml-2 leading-loose">
                  Lorem ipsum Lorem ipsum Lorem ipsum
                </label>
              </li>
              <li className="flex items-center">
                <input type="checkbox" id="task3" className="rounded-full" />
                <label htmlFor="task3" className="ml-2 leading-loose">
                  Lorem ipsum Lorem ipsum Lorem ipsum
                </label>
              </li>
            </ul>
            <FaPlus className="text-purple-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
