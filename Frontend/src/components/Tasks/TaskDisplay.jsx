import React, { useEffect, useState } from "react";
import { getAllTasks } from "../../api/task";
import TaskTable from "./TaskTable";

function TaskDisplay({tasks}) {
  if (tasks.length === 0) return <p>No tasks found</p>;

  return (
    <div>
      <h2>Task List</h2>
      <TaskTable tasks={tasks} />
    </div>
  );
}

export default TaskDisplay;
