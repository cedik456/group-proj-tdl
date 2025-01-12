import Sidebar from "../components/Sidebar";
import { useState } from "react";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="relative flex home-container">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div
        className={`flex-grow p-4 content ${isSidebarOpen ? "pl-72" : "pl-16"}`}
      >
        <div className="mt-10 ml-16">
          <h2>Plans For Today</h2>
          <ul className="ml-4">
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
            <li className="flex items-center justify-center w-5 h-5 mt-2 text-white rounded-full cursor-pointer bg-primary-500">
              +
            </li>
          </ul>
        </div>

        <div className="mt-40 ml-16">
          <h2>Plans For The Week</h2>
          <ul className="ml-4">
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
            <li className="flex items-center justify-center w-5 h-5 mt-2 text-white rounded-full cursor-pointer bg-primary-500">
              +
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
