import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Input, Button, Checkbox } from "antd";

function TaskForm({ onSubmit, existingTask }) {
  const [title, setTitle] = useState(existingTask ? existingTask.title : "");
  const [text, setText] = useState(existingTask ? existingTask.text : "");
  const [isComplete, setIsComplete] = useState(existingTask ? existingTask.isComplete : false);
  const navigate = useNavigate();

  const handleSubmit = () => {
    if (!title.trim()) return;
    onSubmit(title, text, isComplete);
  };

  return (
    <Form onFinish={handleSubmit}>
      <Form.Item>
        <Input
          type="text"
          placeholder="Task Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </Form.Item>
      <Form.Item>
        <Input
          type="text"
          placeholder="Task Description..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form.Item>
      {existingTask && (
        <Form.Item>
          <Checkbox
            checked={isComplete}
            onChange={(e) => setIsComplete(e.target.checked)}
          >
            Complete
          </Checkbox>
        </Form.Item>
      )}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          {existingTask ? "Save Changes" : "Add Task"}
        </Button>
        <Button type="default" onClick={() => navigate("/")}>
          Cancel
        </Button>
      </Form.Item>
    </Form>
  );
}

export default TaskForm;
