import React from "react";
import { useState,useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import AddTaskForm from "./TaskForm/AddTaskForm";
import TaskDisplay from "../Tasks/TaskDisplay";
import { createTask, getAllTasks } from "../../api/task";
function DisplaySection() {
  const [showTaskForm, setshowTaskForm] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getAllTasks();
        console.log(data);
        setTasks(data);
      } catch (error) {
        console.log(error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchTasks();
  }, []);

  const handleTaskCreation = async (taskData) => {
    try {
      const createdTask = await createTask(taskData);
      setTasks((prevTasks) => [...prevTasks, createdTask]);
      console.log("Task created", createdTask);
    } catch (error) {
      console.error(error.message);
    }
  };


  function toggleTaskForm() {
    setshowTaskForm(!showTaskForm);
  }

  function formCloseHanlder() {
    setshowTaskForm(!showTaskForm);
  }

  if (loading) return <p>Loading tasks...</p>;

  if (error) return <p>Error fetching tasks: {error}</p>;

  return (
    <div className="h-/12 relative w-full p-12 pt-24">
      <div className="tasks flex flex-col">
        <button
          className="flex items-center gap-2 hover:text-[#DC4C3E]"
          onClick={toggleTaskForm}
        >
          <FaPlusCircle />
          Add task
        </button>
        <div
          className={`absolute left-[25%] z-50 w-1/2 ${showTaskForm ? "block" : "hidden"}`}
        >
          <AddTaskForm
            closeForm={formCloseHanlder}
            onSubmit={handleTaskCreation}
          />
        </div>
        <TaskDisplay tasks={tasks} />
      </div>
    </div>
  );
}

export default DisplaySection;
