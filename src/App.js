import React, { useState, useEffect } from 'react';
import { Layout, Row, Col, Menu } from 'antd';
import { Routes, Route, Navigate, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Task from "./pages/Task";
import Register from './components/Register';
import Login from './components/Login';
import Logout from './components/Logout';
import { db, auth } from './firebase';
import { collection, getDocs, addDoc, updateDoc, doc, deleteDoc } from "firebase/firestore";
import { onAuthStateChanged } from "firebase/auth";

const { Header, Content, Footer } = Layout;

function App() {
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "tasks"));
        const tasksData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setTasks(tasksData);
      } catch (error) {
        console.error("Error fetching tasks:", error.message); // Debugging
      }
    };

    fetchTasks();
  }, []);

  // for authentication state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("Authenticated User:", user); // Debugging
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  const addTask = async (title, text, isComplete) => {
    const newTask = { title, text, completed: isComplete };
    const docRef = await addDoc(collection(db, "tasks"), newTask);
    setTasks([...tasks, { id: docRef.id, ...newTask }]);
  };

  const updateTask = async (taskId, updatedTitle, updatedText, isComplete) => {
    console.log("Editing Task ID:", taskId); // Debugging
    console.log("Updated Title:", updatedTitle); // Debugging
    console.log("Updated Text:", updatedText); // Debugging
    console.log("Is Complete:", isComplete); // Debugging
  
    try {
      const taskRef = doc(db, "tasks", taskId);
      await updateDoc(taskRef, {
        title: updatedTitle,
        text: updatedText,
        completed: isComplete
      });
      setTasks(tasks.map(task =>
        task.id === taskId ? { ...task, title: updatedTitle, text: updatedText, completed: isComplete } : task
      ));
      console.log("Task updated successfully!"); // Debugging
    } catch (error) {
      console.error("Error updating task:", error.message); // Debugging
    }
  };

  const toggleTask = async (id) => {
    const task = tasks.find(task => task.id === id);
    const taskRef = doc(db, "tasks", id);
    await updateDoc(taskRef, {
      completed: !task.completed
    });
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const deleteTask = async (id) => {
    const taskRef = doc(db, "tasks", id);
    await deleteDoc(taskRef);
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <Layout>
      <Header style={{ background: '#fff', padding: 0 }}>
      <div className="logo" style={{ color: '#000', fontSize: '20px', fontWeight: 'bold', paddingLeft: '20px' }}>
          To-Do App
        </div>
        <Menu mode="horizontal">
          <Menu.Item key="home">
            <Link to="/">Home</Link>
          </Menu.Item>
          {!user && (
            <>
              <Menu.Item key="register">
                <Link to="/register">Register</Link>
              </Menu.Item>
              <Menu.Item key="login">
                <Link to="/login">Login</Link>
              </Menu.Item>
            </>
          )}
          {user && (
            <Menu.Item key="logout">
              <Logout />
            </Menu.Item>
          )}
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Row justify="center" style={{ minHeight: '80vh' }}>
          <Col span={12}>
            <div className="site-layout-content">
              <Routes>
                <Route path="/" element={user ? <Home tasks={tasks} addTask={addTask} /> : <Navigate to="/login" />} />
                <Route path="/task/:id" element={user ? <Task tasks={tasks} addTask={addTask} updateTask={updateTask} toggleTask={toggleTask} deleteTask={deleteTask} /> : <Navigate to="/login" />} />
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
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
