import { Link } from "react-router-dom";

function taskItem ({task}){
  return(
    <>
        <Link to={`/task/${task.id}`} style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </Link>
    </>
  );

};

export default taskItem;