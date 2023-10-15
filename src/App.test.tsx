import React from 'react';
import { render, screen } from '@testing-library/react';
import {ProjectRouter} from './App';

test('renders learn react link', () => {
  render(<ProjectRouter />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
