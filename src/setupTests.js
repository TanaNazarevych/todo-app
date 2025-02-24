import '@testing-library/jest-dom';

// Mock window.matchMedia for testing
global.matchMedia = jest.fn().mockImplementation(query => ({
  matches: false,
  media: query,
  addListener: jest.fn(),
  removeListener: jest.fn(),
}));
