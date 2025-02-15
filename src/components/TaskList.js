import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    (task.text && task.text.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      {tasks.length === 0 && (
        <div>
          <h3>No tasks yet.</h3>
          <button onClick={() => navigate("/task/new")}>Add Task</button>
        </div>
      )}

      {tasks.length > 0 && (
        <div>
          <input
            type="text"
            placeholder="Search tasks..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <br/>
          <button onClick={() => navigate("/task/new")}>Add Task</button>

          <div>
            {filteredTasks.length > 0 ? (
              filteredTasks.map((task) => (
                <TaskItem key={task.id} task={task} />
              ))
            ) : (
              <p>No tasks found.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default TaskList;
