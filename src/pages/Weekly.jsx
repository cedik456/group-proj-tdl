import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import Sidebar from "../components/Sidebar";

const Weekly = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
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
              <li className="flex items-center">
                <input type="checkbox" id="task4" className="rounded-full" />
                <label htmlFor="task4" className="ml-2 leading-loose">
                  Lorem ipsum Lorem ipsum Lorem ipsum
                </label>
              </li>
              <li className="flex items-center">
                <input type="checkbox" id="task5" className="rounded-full" />
                <label htmlFor="task5" className="ml-2 leading-loose">
                  Lorem ipsum Lorem ipsum Lorem ipsum
                </label>
              </li>
              <li className="flex items-center">
                <input type="checkbox" id="task6" className="rounded-full" />
                <label htmlFor="task6" className="ml-2 leading-loose">
                  Lorem ipsum Lorem ipsum Lorem ipsum
                </label>
              </li>
            </ul>
            <FaPlus className="cursor-pointer text-primary-500" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Weekly;
