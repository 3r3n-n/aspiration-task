import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

it('renders sub-heading', () => {
  render(<App />);
  expect(screen.getByText('Related Topics:')).toBeInTheDocument();
});