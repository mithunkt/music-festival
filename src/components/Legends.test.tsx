import React from 'react';
import { render, screen } from '@testing-library/react';
import Legends from './Legends';

test('renders legends component', () => {
  render(<Legends />);
  const recordLabelElem = screen.getByText(/Record Label/i);
  const bandElem = screen.getByText(/Band/i);
  const festivalElem = screen.getByText(/^Festival$/);
  expect(recordLabelElem).toBeInTheDocument();
  expect(bandElem).toBeInTheDocument();
  expect(festivalElem).toBeInTheDocument();
});