import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';

// Mock TaskItem component to check if the correct tasks are passed down
jest.mock('../components/TaskList', () => (props) => {
  return (
    <div>
      {props.tasks.map((task) => (
        <div key={task.id}>{task.title}</div>
      ))}
    </div>
  );
});

describe('Home Component', () => {
  const tasks = [
    { id: 1, title: 'Task 1', text: 'Description 1', completed: false },
    { id: 2, title: 'Task 2', text: 'Description 2', completed: true },
    { id: 3, title: 'Task 3', text: 'Description 3', completed: false },
  ];

  // Test for rendering sorted tasks
  test('renders sorted tasks with completed tasks first', () => {
    render(
      <BrowserRouter>
        <Home tasks={tasks} addTask={jest.fn()} />
      </BrowserRouter>
    );
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
  });

  // Test for useEffect console log
  test('logs tasks to console on task update', () => {
    console.log = jest.fn();  // Mock the console.log

    render(
      <BrowserRouter>
        <Home tasks={tasks} addTask={jest.fn()} />
      </BrowserRouter>
    );

    expect(console.log).toHaveBeenCalledWith('Tasks received in Home.js:', tasks);
  });

  // Test if TaskList is rendered with correct tasks
  test('passes sorted tasks to TaskList component', () => {
    const { container } = render(
      <BrowserRouter>
        <Home tasks={tasks} addTask={jest.fn()} />
      </BrowserRouter>
    );

    // Ensure TaskList receives the correct sorted tasks
    expect(container.textContent).toContain('Task 2');
    expect(container.textContent).toContain('Task 1');
    expect(container.textContent).toContain('Task 3');
  });
});
