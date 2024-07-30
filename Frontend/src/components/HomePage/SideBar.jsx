import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { FiSidebar } from "react-icons/fi";
import { CiBellOn } from "react-icons/ci";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
function SideBar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isDropDownOpen, setIsDropDownOpen] = useState(false);
  function sidebarHanlder() {
    setIsSidebarOpen(!isSidebarOpen);
  }
  return (
    <div className="w-72 bg-[#FCFAF8] h-screen p-2">
      <header className="flex justify-between items-center text-lg">
        <div className="flex gap-2 items-center justify-center hover:bg-gray-100 ">
          <img
            src="my_picture.jpeg"
            className="h-10 w-10 rounded-full"
            alt=""
          />
          <h3>name</h3>
          <RiArrowDropDownLine className="h-8 w-8" />
        </div>

        <div className="icons flex gap-2 justify-center ">
          <button>
            <CiBellOn className="h-6 w-6" />
          </button>
          <button onClick={sidebarHanlder}>
            <FiSidebar className="h-6 w-6" />
          </button>
        </div>
      </header>
      <main className="px-2 py-6 w-full ">
        <nav className="flex flex-col gap-2">
          <div
            className="add-task rounded-lg px-2
          py-1  hover:bg-[#fef1e5]"
          >
            <button className="flex gap-2 items-center  hover:text-[#DC4C3E]">
              <FaPlusCircle />
              Add task
            </button>
          </div>
          <div
            className="add-task rounded-lg px-2
          py-1  hover:bg-[#fef1e5]"
          >
            <button className="flex gap-2 items-center  hover:text-[#DC4C3E]">
              Notes
            </button>
          </div>
        </nav>
      </main>
    </div>
  );
}

export default SideBar;
