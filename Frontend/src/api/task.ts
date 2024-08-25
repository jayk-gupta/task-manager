import axios from "axios";
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

export const createTask = async (taskData:TaskData):Promise<void> => {
  console.log(taskData);
  try {
    const response = await axios.post(`${API_URL}`, taskData, {
      withCredentials: true,
    });
    console.log("Task created successfully:", response.data.response);
  } catch (error) {
    console.log(error);
  }
};
