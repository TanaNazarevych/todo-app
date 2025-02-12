import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (title, text) => {
    const newTask = { id: Date.now(), title, text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (taskId, updatedTitle, updatedText) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, title: updatedTitle, text: updatedText } : task
    ));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Routes>
      <Route path="/" element={<Home tasks={tasks} addTask={addTask} />} />
      {/* A single route that handles both creating and editing tasks */}
      <Route path="/task/:id" element={<Task tasks={tasks} addTask={addTask} updateTask={updateTask} toggleTask={toggleTask} deleteTask={deleteTask} />} />
    </Routes>
  );
}

export default App;
