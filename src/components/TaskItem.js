import React from 'react';
import { Link } from "react-router-dom";

function TaskItem ({task}){
  return(
    <>
        <Link to={`/task/${task.id}`} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </Link>
      {task.text && <p>{task.text}</p>}
    </>
  );

};

export default TaskItem;