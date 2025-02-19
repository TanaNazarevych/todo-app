import React, { useState, useEffect } from 'react';
import { Layout, Row, Col } from 'antd';
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Task from "./pages/Task";

const { Header, Content, Footer } = Layout;

function App() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  useEffect(() => {
    console.log("Saving tasks:", tasks); // Debug log
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);


  const addTask = (title, text, isComplete) => {
    const newTask = { id: Date.now(), title, text, completed: isComplete };
    setTasks([...tasks, newTask]);
  };

  const updateTask = (taskId, updatedTitle, updatedText, isComplete) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, title: updatedTitle, text: updatedText, completed: isComplete } : task
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
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
        <div className="logo" style={{ color: '#000', fontSize: '20px', fontWeight: 'bold', paddingLeft: '20px' }}>
          To-Do App
        </div>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Row justify="center" style={{ minHeight: '80vh' }}>
          <Col span={12}>
            <div className="site-layout-content">
              <Routes>
                <Route path="/" element={<Home tasks={tasks} addTask={addTask} />} />
                <Route path="/task/:id" element={<Task tasks={tasks} addTask={addTask} updateTask={updateTask} toggleTask={toggleTask} deleteTask={deleteTask} />} />
              </Routes>
            </div>
          </Col>
        </Row>
      </Content>
      <Footer style={{ textAlign: 'center' }}>To-Do app ©2025 Created by Tanya Nazarevych</Footer>
    </Layout>
  );
}

export default App;
