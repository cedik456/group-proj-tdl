import { useState } from "react";
import ProfilePic from "../assets/images/profile.png";
import PropTypes from "prop-types";
import { IoIosArrowDown, IoIosAddCircle } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { MdInbox } from "react-icons/md";
import { BiCalendarAlt } from "react-icons/bi";
import { CgCalendarDates } from "react-icons/cg";
import { BsLayoutSidebar } from "react-icons/bs";
import { Link } from "react-router-dom";
import { CheckCircleIcon } from "lucide-react";
import AddTaskModal from "./AddTaskModal";

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAddTask = (task) => {
    // Handle adding the task (e.g., update state or make API call)
    console.log("Task added:", task);
  };

  return (
    <nav
      className={`fixed top-0 left-0 flex flex-col items-center h-screen px-4 py-4 bg-[#FCFAF8] transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-60"
      } w-72`}
    >
      <div className="flex flex-col flex-grow w-full gap-20 py-2">
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <img
                src={ProfilePic}
                alt=""
                className="w-6 h-6 border-2 rounded-full border-primary-600"
              />
              <span className="text-lg font-normal ">Ced</span>
              <IoIosArrowDown className="text-lg" />
            </div>
            <div className="flex items-center gap-6 text-xl ">
              <GoBell />
              <BsLayoutSidebar onClick={() => setIsOpen(!isOpen)} />
            </div>
          </div>
          <button
            className="flex items-center w-full gap-2 py-2 pl-1 mb-2 text-lg rounded-md text-primary-500 hover:bg-[#F1EFED] "
            onClick={() => setIsModalOpen(true)}
          >
            <IoIosAddCircle className="text-3xl " />
            Add Task
          </button>
          <div className="flex flex-col gap-2 text-base ">
            <Link
              to="/inbox"
              className="flex items-center gap-2 p-2 text-black rounded-md hover:bg-[#F1EFED] hover:text-current "
            >
              <MdInbox className="text-2xl" />
              Inbox
            </Link>
            <Link
              to="/"
              className="flex items-center gap-2 p-2 text-black rounded-md hover:bg-[#F1EFED] hover:text-current"
            >
              <BiCalendarAlt className="text-2xl" />
              Today
            </Link>
            <Link
              to="/weekly"
              className="flex items-center gap-2 p-2 text-black rounded hover:bg-[#F1EFED] hover:text-current"
            >
              <CgCalendarDates className="text-2xl" />
              Weekly
            </Link>
            <Link
              to="/done"
              className="flex items-center gap-2 p-2 text-black rounded hover:bg-[#F1EFED] hover:text-current"
            >
              <CheckCircleIcon className="text-2xl" />
              Done
            </Link>
          </div>
        </div>
        <div>
          <div>
            <h1 className="text-lg font-normal">My Projects</h1>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 p-2 text-lg rounded-md hover:bg-[#F1EFED]">
              <span>#</span>
              <Link
                to="/"
                className="flex items-center gap-1 text-black hover:text-current"
              >
                Home
              </Link>
            </div>

            <div className="flex items-center gap-2 p-2 text-lg rounded-md hover:bg-[#F1EFED]">
              <span>#</span>
              <Link
                to="/"
                className="flex items-center gap-1 text-black hover:text-current"
              >
                My Work
              </Link>
            </div>

            <div className="flex items-center gap-2 p-2 text-lg rounded-md hover:bg-[#F1EFED]">
              <span>#</span>
              <Link
                to="/"
                className="flex items-center gap-1 text-black hover:text-current"
              >
                Education
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="text-xs text-left text-gray-400">
        © 2025 | Ahead | All Rights Reserved.
      </div>
      <AddTaskModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onAddTask={handleAddTask}
      />
    </nav>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Sidebar;
