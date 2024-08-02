import React from "react";
import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";
import AddTaskForm from "./AddTaskForm";
function DisplaySection() {
  const [addTask, setAddTask] = useState();
  const [popupTask, setPopupTask] = useState(false);
  function FormCloseHanlder() {
    setPopupTask(!popupTask);
  }
  function taskHandler() {
    setAddTask();
  }
  function popupTaskHandler() {
    setPopupTask(!popupTask);
  }
  return (
    <div className="h-/12 mt-32 w-1/2">
      <div className="tasks flex flex-col">
        <h3 className="text-lg font-bold text-gray-700">Today</h3>
        {/* display number of tasks */}
        <p>1 task</p>
        <div className="my-4">tasks list</div>
        <div>
          {popupTask ? (
            <AddTaskForm closeForm={FormCloseHanlder} />
          ) : (
            <button
              className="flex items-center gap-2 hover:text-[#DC4C3E]"
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
