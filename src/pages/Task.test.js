import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Task from './Task';
import { BrowserRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';


const mockAddTask = jest.fn();
const mockUpdateTask = jest.fn();
const mockDeleteTask = jest.fn();


const tasks = [
  { id: 1, title: 'Test Task', text: 'Test description', isComplete: false },
];

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useParams: jest.fn(),
}));

// Test for creating a new task
describe('Task Component', () => {
  test('renders TaskForm for creating a new task', () => {
    useParams.mockReturnValue({ id: 'new' });

    render(
      <BrowserRouter>
        <Task tasks={tasks} addTask={mockAddTask} updateTask={mockUpdateTask} deleteTask={mockDeleteTask} />
      </BrowserRouter>
    );

    expect(screen.getByText(/Create Task/i)).toBeInTheDocument();
  });

  // Test for editing an existing task
  test('renders TaskForm for editing an existing task', () => {
    useParams.mockReturnValue({ id: '1' });

    render(
      <BrowserRouter>
        <Task tasks={tasks} addTask={mockAddTask} updateTask={mockUpdateTask} deleteTask={mockDeleteTask} />
      </BrowserRouter>
    );

    expect(screen.getByPlaceholderText(/Task Title.../)).toHaveValue('Test Task');
    expect(screen.getByPlaceholderText(/Task Description.../)).toHaveValue('Test description');
    expect(screen.getByText(/Edit Task/i)).toBeInTheDocument();
  });
});