import { useState } from "react";
import TaskItem from "./TaskItem"

function TaskList({tasks}){
  const[search, setSearch] = useState("");

  const filteredTasks = TaskList.filter
  (task => task.title.toLowerCase().includes(search.toLowerCase()) ||
  task.text.toLowerCase().includes(search.toLowerCase())
  );

  return(
    <>
      {tasks.length > 0 && (
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
      <ul>
        {filteredTasks.length > 0 ? (
          filteredTasks.map((task) => (
            <TaskItem key={task.id} task={task} />
          ))
        ) : (
          <p>No tasks found.</p>
        )}
      </ul>

    </>
  );

};

export default TaskList;