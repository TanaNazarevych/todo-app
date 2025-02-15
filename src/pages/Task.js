import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { Card } from "antd";

function Task({ tasks = [], addTask, updateTask, deleteTask }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const isNewTask = id === "new";
  const existingTask = !isNewTask ? tasks.find((task) => task.id === Number(id)) : null;

  if (!isNewTask && !existingTask) {
    return <p>Task not found.</p>;
  }

  const handleSubmit = (title, text, isComplete) => {
    if (isNewTask) {
      addTask(title, text, isComplete);
    } else {
      updateTask(existingTask.id, title, text, isComplete);
    }
    navigate("/");
  };

  const handleDelete = () => {
    deleteTask(existingTask.id);
    navigate("/");
  };

  return (
    <Card title={isNewTask ? "Create Task" : "Edit Task"} style={{ marginBottom: '20px' }}>
      <TaskForm onSubmit={handleSubmit} existingTask={existingTask} onDelete={handleDelete} />
    </Card>
  );
}

export default Task;
