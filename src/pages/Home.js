import React from 'react';
import { Link } from "react-router-dom";
import { Card, Button, Divider, Row, Col } from "antd";

function Home({ tasks, addTask }) {
  const sortedTasks = [...tasks].sort((a, b) => a.completed - b.completed);

  return (
    <div>
      <Row justify="center" style={{ marginTop: '20px' }}>
        <Col>
          <h1 style={{ textAlign: 'center' }}>Tasks</h1>
          {sortedTasks.length === 0 ? (
            <>
              <h3 style={{ textAlign: 'center' }}>No tasks yet.</h3>
              <Button type="primary" style={{ display: 'block', margin: '20px auto' }}>
                <Link to="/task/new">Add Task</Link>
              </Button>
            </>
          ) : (
            sortedTasks.map(task => (
              <Card key={task.id} style={{ marginBottom: '20px', padding: '40px', width: '400px', position: 'relative' }}>
                <Button type="primary" style={{ position: 'absolute', top: '10px', right: '10px' }}>
                  <Link to={`/task/${task.id}`} style={{ color: '#fff' }}>Edit</Link>
                </Button>
                <h2 style={{ fontSize: '24px', textDecoration: task.completed ? 'line-through' : 'none' }}>{task.title}</h2>
                <Divider />
                <p style={{ fontSize: '18px', textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</p>
              </Card>
            ))
          )}
          {sortedTasks.length > 0 && (
            <Button type="primary" style={{ display: 'block', margin: '20px auto' }}>
              <Link to="/task/new">Add Task</Link>
            </Button>
          )}
        </Col>
      </Row>
    </div>
  );
}

export default Home;
