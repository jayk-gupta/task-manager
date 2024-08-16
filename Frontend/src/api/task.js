import axios from "axios";
const API_URL = "http://localhost:3000/task";

export const getAllTasks = async () => {
    try {
        const response = await axios.get(`${API_URL}`)
        return response.data 
    } catch (err) {
        console.error("ERror fetching tasks",err)
    }
}