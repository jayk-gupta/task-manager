import React from "react";
import styles from "./TaskTable.module.css"
const TaskTable = ({ tasks }) => {
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
