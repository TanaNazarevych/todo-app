import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskPage from "./pages/TaskPage";

function App() {
  const [tasks, setTasks] = useState([]);

  //Function to add a new task
  const addTask = (taskTitle) => {
    const newTask = { id: Date.now(), title: taskTitle, completed: false };
    setTasks([...tasks, newTask]);
  };

  //Function to update a task title
  const updateTask = (id, newTitle) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, title: newTitle } : task));
  };

  //Function to toggle task completion
  const toggleTask = (id) => {
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: !task.completed } : task));
  };

  //Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Router> {/*Enables routing in the app */}
      <Routes> {/*Holds all routes (pages) */}
        <Route path="/" element={<Home tasks={tasks} addTask={addTask} />} />
        <Route
          path="/task/:id"
          element={<TaskPage tasks={tasks} updateTask={updateTask} toggleTask={toggleTask} deleteTask={deleteTask} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
