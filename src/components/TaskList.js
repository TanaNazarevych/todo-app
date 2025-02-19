import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import TaskItem from "./TaskItem";
import { Input, Button, Row, Col } from "antd";

function TaskList({ tasks }) {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase()) ||
    (task.text && task.text.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div>
      {tasks.length > 0 && (
        <Row gutter={16} style={{ marginBottom: '20px' }}>
          <Col flex="auto">
            <Input
              placeholder="Search tasks..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </Col>
        </Row>
      )}

      {tasks.length === 0 ? (
        <div>
          <h3>No tasks yet.</h3>
        </div>
      ) : (
        <div>
          {filteredTasks.length > 0 ? (
            filteredTasks.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))
          ) : (
            <p>No tasks found.</p>
          )}
        </div>
      )}

      <Button type="primary" onClick={() => navigate("/task/new")} style={{ display: 'block', margin: '20px auto' }}>
        Add Task
      </Button>
    </div>
  );
}

export default TaskList;