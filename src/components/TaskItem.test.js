import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TaskItem from './TaskItem';
import { BrowserRouter } from 'react-router-dom';

describe('TaskItem Component', () => {
  const task = { id: 1, title: 'Test Task' };

  // Test 1: Render task title
  test('renders task title', () => {
    render(
      <BrowserRouter>
        <TaskItem task={task} />
      </BrowserRouter>
    );

    const taskTitle = screen.getByText(/Test Task/i);
    expect(taskTitle).toBeInTheDocument();
  });

  // Test 2: Check if the link is working properly
  test('renders task title as a link', () => {
    render(
      <BrowserRouter>
        <TaskItem task={task} />
      </BrowserRouter>
    );

    const linkElement = screen.getByRole('link', { name: /Test Task/i });
    expect(linkElement).toHaveAttribute('href', `/task/${task.id}`);
  });
});
