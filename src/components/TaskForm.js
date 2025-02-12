import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TaskForm({ onSubmit, existingTask }) {
  const [title, setTitle] = useState(existingTask ? existingTask.title : "");
  const [text, setText] = useState(existingTask ? existingTask.text : "");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSubmit(title, text); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="Task Description..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit">{existingTask ? "Save Changes" : "Add Task"}</button>
      <button type="button" onClick={() => navigate("/")}>Cancel</button>
    </form>
  );
}

export default TaskForm;
