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
        className="flex flex-col gap-2 rounded-xl border-2 border-gray-300 bg-white p-2"
        onSubmit={handleSubmit}
      >
        {/* task name */}
        <input
          className="focus: border-none bg-white font-bold text-gray-500 outline-none"
          placeholder="Task name"
          required
          value={taskName}
          onChange={taskHandler}
        />
        {/* description */}
        <input
          className="focus: border-none bg-white bg-none text-sm text-gray-300 outline-none"
          placeholder="Description "
          required
          value={description}
          onChange={descriptionHanlder}
        />
        <div className="options mt-4 border-b-2 pb-2">
          {/*****************  PRIORITY * ***********/}
          <button
            className="flex w-32 items-center justify-center gap-2 rounded-lg border-2 px-2"
            onClick={priorityShowHHandler}
          >
            <span>
              <CiFlag1 className="text-lg text-red-400" />
            </span>
            Priority
          </button>
          {showPrioriies ? <PriorityOptions /> : <></>}
        </div>
        <div className="border-t-1 flex justify-end gap-2">
          <button
            type="button"
            className="rounded-sm bg-gray-100 p-2 font-bold hover:bg-gray-200"
            onClick={closeForm}
          >
            Cancel
          </button>
          <button
            type="submit"
            className={`rouded-lg rounded-sm bg-[#EDA59E] p-2 font-bold text-white ${
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
