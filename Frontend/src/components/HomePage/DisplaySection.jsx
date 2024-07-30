import React from "react";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import AddTaskForm from "./AddTaskForm";
function DisplaySection() {
  const [addTask, setAddTask] = useState()
  const [popupTask, setPopupTask] = useState(false)
  function FormCloseHanlder() {
    setPopupTask(!popupTask)
  }
  function taskHandler() {
    setAddTask()
  }
  function popupTaskHandler() {
    setPopupTask(!popupTask)
  }
  return (
    <div className="w-1/2 h-/12  mt-32  ">
      <div className="tasks flex flex-col  ">
        <h3 className="text-gray-700 font-bold text-lg">Today</h3>
        {/* display number of tasks */}
        <p>1 task</p>
        <div className="my-4">
          tasks list 
        </div>
        <div>
          {popupTask ? (
            <AddTaskForm closeForm={ FormCloseHanlder} />
          ) : (
            <button
              className="flex gap-2 items-center hover:text-[#DC4C3E]"
              onClick={popupTaskHandler}
            >
              <FaPlusCircle />
              Add task
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default DisplaySection;
