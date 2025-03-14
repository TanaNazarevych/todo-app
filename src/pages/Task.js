import React from 'react';
import { useParams, useNavigate } from "react-router-dom";
import TaskForm from "../components/TaskForm";
import { Card } from "antd";

function Task({ tasks = [], addTask, updateTask, deleteTask }) {
  const { id } = useParams(); // Extract the task ID from the URL
  const navigate = useNavigate();

  const isNewTask = id === "new"; // Check if this is a new task
  const existingTask = !isNewTask ? tasks.find((task) => task.id === id) : null; // Find the task by ID

  if (!isNewTask && !existingTask) {
    return <p>Task not found.</p>; // Show error if task is not found
  }

  const handleSubmit = (title, text, isComplete) => {
    if (isNewTask) {
      addTask(title, text, isComplete); // Add a new task
    } else {
      updateTask(existingTask.id, title, text, isComplete); // Update the existing task
    }
    navigate("/"); // Navigate back to the home page
  };

  const handleDelete = () => {
    deleteTask(existingTask.id); // Delete the task
    navigate("/"); // Navigate back to the home page
  };

  return (
    <Card title={isNewTask ? "Create Task" : "Edit Task"} style={{ marginBottom: '20px' }}>
      <TaskForm onSubmit={handleSubmit} existingTask={existingTask} onDelete={handleDelete} />
    </Card>
  );
}

export default Task;
