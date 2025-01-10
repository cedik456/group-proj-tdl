import ProfilePic from "../assets/images/profile.png";
import { FaRegBell } from "react-icons/fa";
import { IoIosArrowDown, IoIosAddCircle } from "react-icons/io";
import { BsLayoutSidebar } from "react-icons/bs";
import { GoBell } from "react-icons/go";

const Sidebar = () => {
  return (
    <nav className="fixed top-0 flex flex-col items-center h-screen px-4 bg-[#FCFAF8] w-72">
      <div className="w-full py-2">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <img
              src={ProfilePic}
              alt=""
              className="w-6 h-6 border border-black rounded-full"
            />
            <h1 className="mt-4 text-base font-normal">Ced</h1>
            <IoIosArrowDown />
          </div>
          <div className="flex items-center gap-6 text-lg ">
            <GoBell />
            <BsLayoutSidebar />
          </div>
        </div>
        <button className="flex items-center gap-2 mb-3 ">
          <IoIosAddCircle className="text-2xl" />
          Add Task
        </button>
        <div className="flex flex-col gap-2 ">
          <a href="" className="text-black">
            Inbox
          </a>
          <a href="" className="text-black">
            Today
          </a>
          <a href="" className="text-black">
            Upcoming
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
