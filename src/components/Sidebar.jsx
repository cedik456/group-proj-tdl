import ProfilePic from "../assets/images/profile.png";
import PropTypes from "prop-types";
import { IoIosArrowDown, IoIosAddCircle } from "react-icons/io";
import { GoBell } from "react-icons/go";
import { MdInbox } from "react-icons/md";
import { BiCalendarAlt } from "react-icons/bi";
import { CgCalendarDates } from "react-icons/cg";
import { BsLayoutSidebar } from "react-icons/bs";

const Sidebar = ({ isOpen, setIsOpen }) => {
  return (
    <nav
      className={`fixed top-0 left-0 flex flex-col items-center h-screen px-4 bg-[#FCFAF8] transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-60"
      } w-72`}
    >
      <div className="w-full py-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <img
              src={ProfilePic}
              alt=""
              className="w-6 h-6 border border-black rounded-full"
            />
            <h1 className="mt-4 text-lg font-normal">Ced</h1>
            <IoIosArrowDown className="text-lg" />
          </div>
          <div className="flex items-center gap-6 text-xl ">
            <GoBell />
            <BsLayoutSidebar onClick={() => setIsOpen(!isOpen)} />
          </div>
        </div>
        <button className="flex items-center w-full gap-2 py-2 pl-1 mb-3 hover:bg-slate-200 ">
          <IoIosAddCircle className="text-2xl" />
          Add Task
        </button>
        <div className="flex flex-col gap-2 ">
          <a
            href=""
            className="flex items-center gap-2 p-2 text-black rounded hover:bg-slate-200"
          >
            <MdInbox className="text-lg" />
            Inbox
          </a>
          <a
            href=""
            className="flex items-center gap-2 p-2 text-black rounded hover:bg-slate-200"
          >
            <BiCalendarAlt className="text-lg" />
            Today
          </a>
          <a
            href=""
            className="flex items-center gap-2 p-2 text-black rounded hover:bg-slate-200"
          >
            <CgCalendarDates className="text-lg" />
            Upcoming
          </a>
        </div>
      </div>
    </nav>
  );
};

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Sidebar;
