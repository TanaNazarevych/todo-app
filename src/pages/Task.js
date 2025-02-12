import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";

function Task({ tasks = [], addTask, updateTask, deleteTask }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const isNewTask = id === "new";
  const existingTask = !isNewTask ? tasks.find((task) => task.id === Number(id)) : null;

  if (!isNewTask && !existingTask) {
    return <p>Task not found.</p>;
  }

  const handleSubmit = (title, text) => {
    if (isNewTask) {
      addTask(title, text);
    } else {
      updateTask(existingTask.id, title, text);
    }
    navigate("/");
  };

  const handleDelete = () => {
    deleteTask(existingTask.id);
    navigate("/");
  };

  return (
    <div>
      <h1>{isNewTask ? "Create Task" : "Edit Task"}</h1>
      <TaskForm onSubmit={handleSubmit} existingTask={existingTask} />
      {!isNewTask && <button onClick={handleDelete}>Delete Task</button>}
      <button onClick={() => navigate("/")}>Cancel</button>
    </div>
  );
}

export default Task;
