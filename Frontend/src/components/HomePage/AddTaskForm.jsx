import React from "react";
import { useState } from "react";
import { CiFlag1 } from "react-icons/ci";
import PriorityOptions from "./PriorityOptions";
function AddTaskForm({ closeForm }) {
  // states
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [submit, setSubmit] = useState(false);
  const [showPrioriies, setShowPriorities] = useState(false);
  //  EVENT HANDLERS
  function taskHandler(e) {
    setTaskName(e.target.value);
  }
  function descriptionHanlder(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    setSubmit(true);
  }
  function priorityShowHHandler() {
    setShowPriorities(!showPrioriies);
  }
  //  JSX
  return (
    <div>
      <form
        className="border-2 rounded-xl bg-white border-gray-300 flex flex-col gap-2 p-2 "
        onSubmit={handleSubmit}
      >
        {/* task name */}
        <input
          className="bg-white border-none text-gray-500 font-bold focus: outline-none"
          placeholder="Task name"
          required
          value={taskName}
          onChange={taskHandler}
        />
        {/* description */}
        <input
          className="bg-none bg-white border-none text-sm text-gray-300  focus: outline-none"
          placeholder="Description "
          required
          value={description}
          onChange={descriptionHanlder}
        />
        <div className="options mt-4 border-b-2 pb-2">
          {/*****************  PRIORITY * ***********/}
          <button
            className="flex px-2 border-2 items-center justify-center gap-2 w-32 rounded-lg"
            onClick={priorityShowHHandler}
          >
            <span>
              <CiFlag1 className="text-lg text-red-400" />
            </span>
            Priority
          </button>
          {showPrioriies ? <PriorityOptions /> : <></>}
        </div>
        <div className="flex gap-2 justify-end border-t-1">
          <button
            type="button"
            className=" font-bold bg-gray-100 hover:bg-gray-200 p-2 rounded-sm"
            onClick={closeForm}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`rouded-lg font-bold p-2 rounded-sm text-white bg-[#EDA59E] ${
              taskName && description
                ? "bg-[#DC4C3E] hover:bg-[#BF3B2D]"
                : "cursor-not-allowed"
            }`}
          >
            Add task
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTaskForm;
