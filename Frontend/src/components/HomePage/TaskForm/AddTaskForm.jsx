import React from "react";
import { useState } from "react";
import { CiFlag1 } from "react-icons/ci";
import PriorityOptions from "./PriorityOptions";
import StatusOptions from "./StatusOptions";

function AddTaskForm({ onSubmit,closeForm }) {
  // states
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedPriority, setSelectedPriority] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("pending");
  //  EVENT HANDLERS
  function taskHandler(e) {
    setTitle(e.target.value);
  }
  function descriptionHanlder(e) {
    setDescription(e.target.value);
  }
  async function handleSubmit(e) {
    e.preventDefault();
    const newTask = {
      title: title,
      description,
      status: selectedStatus,
      priority: selectedPriority,
    };
    onSubmit(newTask)
    closeForm()
  }
  const handleStatusChange = (status) => {
    setSelectedStatus(status);
  };
  function handlePrioritySelect(priority) {
    setSelectedPriority(priority);
  }
  //  JSX
  return (
    <div className="rounded-xl shadow-2xl">
      <form
        className="flex flex-col gap-2 rounded-xl bg-white p-2"
        onSubmit={handleSubmit}
      >
        {/* task name */}
        <input
          className="focus: border-none bg-white font-bold text-gray-500 outline-none"
          placeholder="Task name"
          required
          value={title}
          onChange={taskHandler}
        />
        {/* description */}
        <input
          className="focus: border-none bg-white bg-none text-lg text-gray-500 outline-none"
          placeholder="Description "
          required
          value={description}
          onChange={descriptionHanlder}
        />
        {/* OPTIONS */}
        <div className="options flex gap-2 border-b-2">
          <div className="options mt-4 pb-2">
            {/*****************  PRIORITY * ***********/}
            <PriorityOptions onSelect={handlePrioritySelect} />
          </div>
          {/* status */}
          <div className="options mt-4 pb-2">
            {/*****************  PRIORITY * ***********/}
            <StatusOptions
              selectedStatus={selectedStatus}
              onStatusChange={handleStatusChange}
            />
          </div>
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
              title && description
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
