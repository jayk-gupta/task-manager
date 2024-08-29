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
    console.error("Error fetching tasks", err);
  }
};

export const createTask = async (taskData: TaskData): Promise<Task> => {
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

export const deleteTask = async (taskId: string) => {
  try {
    const response = await axios.delete(`${API_URL}/${taskId}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.log(error);
    throw new Error("Task deletion failed");
  }
};
export const updateTask = async (taskId: string, taskData: Task) => {
  try {
    const res = await axios.put(`${API_URL}/${taskId}`, taskData, {
      withCredentials: true,
    });
    return res.data
  } catch (error) {
    throw new Error("Task updation failed");
  }
};
