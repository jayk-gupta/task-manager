import axios from "axios";
import { Task } from "../types/task";
const API_URL = "http://localhost:3000/task";

interface TaskData {
  title: string;
  description: string;
  status: string;
  priority: string;
}
export const getAllTasks = async () => {
  try {
    const response = await axios.get(`${API_URL}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (err) {
    console.error("ERror fetching tasks", err);
  }
};

export const createTask = async (taskData: TaskData): Promise<Task> => {
  console.log(taskData);
  try {
    const response = await axios.post(`${API_URL}`, taskData, {
      withCredentials: true,
    });
    console.log("Task created successfully:", response.data.response);
    const createdTask: Task = response.data;
    return createdTask;
  } catch (error) {
    console.log(error);
    throw new Error("Task creation failed");
  }
};
