import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe('App Component', () => {
  test('renders the App and displays the header', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Check if header is displayed
    const headers = screen.getAllByText(/To-Do App/i);
    expect(headers.length).toBeGreaterThan(0);
  });

  test('renders the App and displays the Tasks header', () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );

    // Check if Tasks header is displayed
    const tasksHeaders = screen.getAllByText(/Tasks/i);
    expect(tasksHeaders.length).toBeGreaterThan(0);
  });
});
