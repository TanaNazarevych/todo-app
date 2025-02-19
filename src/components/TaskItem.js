import React from 'react';
import { Card, Button, Divider } from "antd";
import { Link } from "react-router-dom";

function TaskItem({ task }) {
  return (
    <Card style={{ marginBottom: '20px', padding: '40px', width: '400px', position: 'relative' }}>
      <Button type="primary" style={{ position: 'absolute', top: '10px', right: '10px' }}>
        <Link to={`/task/${task.id}`} style={{ color: '#fff' }}>Edit</Link>
      </Button>
      <h2 style={{ fontSize: '24px', textDecoration: task.completed ? 'line-through' : 'none' }}>
        <Link to={`/task/${task.id}`} style={{ color: 'inherit', textDecoration: 'inherit' }}>
          {task.title}
        </Link>
      </h2>
      <Divider />
      <p style={{ fontSize: '18px', textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</p>
    </Card>
  );
}

export default TaskItem;