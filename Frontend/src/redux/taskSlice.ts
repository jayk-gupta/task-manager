import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Task, TaskData } from "../types/task";

interface TaskState {
  tasks: Task[];
}

const initialState: TaskState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      state.tasks.push(action.payload);
    },
    setTasks: (state, action:PayloadAction<Task[]>) => {
      state.tasks = action.payload;
    },
    removeTask: (state, action: PayloadAction<{ id: string }>) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload.id);
    },
    updateTask: (state, action: PayloadAction<Task>) => {
      const index = state.tasks.findIndex(
        (task) => task._id === action.payload._id,
      );
      if (index !== -1) {
        state.tasks[index] = { ...state.tasks[index], ...action.payload };
      }
    },
    deleteTask: (state, action: PayloadAction<{ id: String }>) => {
      state.tasks = state.tasks.filter((task) => task._id !== action.payload.id);
    },
  },
});

export const { addTask, removeTask, updateTask, deleteTask, setTasks } =
  taskSlice.actions;

export default taskSlice.reducer;
