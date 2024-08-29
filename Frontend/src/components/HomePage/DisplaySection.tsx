import React from "react";
import { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import AddTaskForm from "./TaskForm/AddTaskForm";
import TaskTable from "../Tasks/TaskTable";
import { createTask, getAllTasks } from "../../api/task";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { setTasks } from "../../redux/taskSlice";
import { addTask } from "../../redux/taskSlice";
import { Task } from "../../types/task";
import { RegisterFormProvider } from "../../contexts/RegisterFormContext";
function DisplaySection() {
  const [showTaskForm, setShowTaskForm] = useState<boolean>(false);
  const tasks = useSelector((state: RootState) => state.tasks.tasks);
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const data = await getAllTasks();
        console.log(data);
        dispatch(setTasks(data));
      } catch (error) {
        console.log(error);
      }
    };
    fetchTasks();
  }, [dispatch]);

  const handleTaskCreation = async (taskData:Task) => {
    try {
      const createdTask:any = await createTask(taskData);
      console.log("Task created", createdTask);
    } catch (error:unknown) {
      console.error(error.message);
    }
  };
 

  function toggleTaskForm() {
    setShowTaskForm(!showTaskForm);
  }

  function formCloseHanlder() {
    setShowTaskForm(!showTaskForm);
  }

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
          <RegisterFormProvider>
            <AddTaskForm
              closeForm={formCloseHanlder}
              onSubmit={handleTaskCreation}
            />
          </RegisterFormProvider>
        </div>
        <TaskTable tasks={tasks} />
      </div>
    </div>
  );
}

export default DisplaySection;
