import { createAsyncThunk } from "@reduxjs/toolkit";
import { Task } from "../types/task";
import axios from "axios";
const API_URL = "http://localhost:3000/task";

interface TaskState {
  tasks: Task[];
  loading: boolean;
  error: string | null;
}

const initialState: TaskState = {
  tasks: [],
  loading: false,
  error: null,
};

export const fetchTasks = createAsyncThunk(
  "tasks/fetchTasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get(`${API_URL}`);
      return response.data;
    } catch (error: any) {
      return rejectWithValue(
        error.response?.data?.message || "Failed to fetch tasks",
      );
    }
  },
);

export const addTaskAsync = createAsyncThunk("tasks/addTask", async (newTask: Partial<Task>, { rejectWithValue }) => {
    try {
        const response = await axios.post(`${API_URL}`, newTask)
        return response.data 
    } catch (error: any) {
        return rejectWithValue(error.response?.data?.message || "Failed to add task")
    }
})

// working on this 
// current working code is in taskSlice.ts