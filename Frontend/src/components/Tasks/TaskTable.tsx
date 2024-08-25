import React from "react";
import styles from "./TaskTable.module.css"
interface Task {
  _id: string;
  title: string;
  description: string;
  status: string;
  priority: string;
}
interface TaskTableProps {
  tasks: Task[];
}
const TaskTable: React.FC<TaskTableProps> = ({ tasks }) => {
  console.log(tasks);
  return (
    <table className={styles.taskTable}>
      <thead>
        <tr>
          <th>Title</th>
          <th>Description</th>
          <th>Status</th>
          <th>Priority</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {/* Using map to dynamically generate table rows */}
        {tasks.map((task) => (
          <tr key={task._id}>
            <td>{task.title}</td>
            <td>{task.description}</td>
            <td>{task.status}</td>
            <td>{task.priority}</td>
            <td>
              <button>Edit</button>
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TaskTable;


/*
Task Interface: Defines the structure of a single task, including its properties like _id, title, description, status, and priority.

TaskTableProps Interface: Defines the structure of the tasks prop, which is an array of Task objects.

React.FC<TaskTableProps>: Specifies that TaskTable is a React functional component that accepts TaskTableProps.*/ 