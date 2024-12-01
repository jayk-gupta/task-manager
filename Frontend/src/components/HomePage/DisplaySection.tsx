import React from "react";
import { useState, useEffect } from "react";
import { FaPlusCircle } from "react-icons/fa";
import AddTaskForm from "./TaskForm/AddTaskForm";
import TaskTable from "../Tasks/TaskTable";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../../redux/store";
import { Task } from "../../types/task";
import { RegisterFormProvider } from "../../contexts/RegisterFormContext";
import { addTaskAsync, fetchTasks } from "../../redux/taskSlice";
function DisplaySection() {
  const [showTaskForm, setShowTaskForm] = useState<boolean>(false);
  const { tasks, loading, error } = useSelector(
    (state: RootState) => state.tasks,
  );
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  const handleTaskCreation = async (taskData: Task) => {
    try {
      await dispatch(addTaskAsync(taskData)).unwrap();
      setShowTaskForm(false);
    } catch (error: unknown) {
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
