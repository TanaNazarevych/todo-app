import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskList from './TaskList';
import { BrowserRouter } from 'react-router-dom';

describe('TaskList Component', () => {
  const tasks = [
    { id: 1, title: 'Test Task 1', text: 'Test description 1', isComplete: false },
    { id: 2, title: 'Test Task 2', text: 'Test description 2', isComplete: true },
  ];

  // Test for rendering tasks
  test('renders list of tasks correctly', () => {
    render(
      <BrowserRouter>
        <TaskList tasks={tasks} />
      </BrowserRouter>
    );

    expect(screen.getByText('Test Task 1')).toBeInTheDocument();
    expect(screen.getByText('Test Task 2')).toBeInTheDocument();
  });

  // Test for showing "No tasks yet" when no tasks are provided
  test('shows "No tasks yet" when there are no tasks', () => {
    render(
      <BrowserRouter>
        <TaskList tasks={[]} />
      </BrowserRouter>
    );

    expect(screen.getByText('No tasks yet.')).toBeInTheDocument();
  });

  // Test for filtering tasks based on search input
  test('filters tasks based on search input', () => {
    render(
      <BrowserRouter>
        <TaskList tasks={tasks} />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText('Search tasks...');
    fireEvent.change(searchInput, { target: { value: 'Test Task 1' } });

    expect(screen.getByText('Test Task 1')).toBeInTheDocument();
    expect(screen.queryByText('Test Task 2')).not.toBeInTheDocument();
  });

  // Test for showing "No tasks found" when no tasks match the search
  test('shows "No tasks found" when search does not match any tasks', () => {
    render(
      <BrowserRouter>
        <TaskList tasks={tasks} />
      </BrowserRouter>
    );

    const searchInput = screen.getByPlaceholderText('Search tasks...');
    fireEvent.change(searchInput, { target: { value: 'Non-existing Task' } });

    expect(screen.getByText('No tasks found.')).toBeInTheDocument();
  });
});
