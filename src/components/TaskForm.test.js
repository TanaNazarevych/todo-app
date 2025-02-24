import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TaskForm from './TaskForm';
import { BrowserRouter } from 'react-router-dom';

describe('TaskForm Component', () => {
  const mockSubmit = jest.fn();
  const mockDelete = jest.fn();
  const task = { id: 1, title: 'Test Task', text: 'Test description', isComplete: false };

  // Test for form submission when title is empty
  test('submit button should not call onSubmit when title is empty', () => {
    render(
      <BrowserRouter>
        <TaskForm onSubmit={mockSubmit} existingTask={{ ...task, title: '' }} onDelete={mockDelete} />
      </BrowserRouter>
    );

    fireEvent.submit(screen.getByRole('button', { name: /Save Changes/i }));  // Trigger the form submission
    expect(mockSubmit).not.toHaveBeenCalled();
  });

  // Test for delete button functionality
  test('delete button should call onDelete when clicked', () => {
    render(
      <BrowserRouter>
        <TaskForm onSubmit={mockSubmit} existingTask={task} onDelete={mockDelete} />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText('Delete Task'));  // Trigger delete button click
    expect(mockDelete).toHaveBeenCalled();
  });
});
