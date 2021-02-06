import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './Error';

test('renders legends component', () => {
  render(<Error error={'Test Error'}/>);
  const recordLabelElem = screen.getByText(/Test Error/i);
  expect(recordLabelElem).toBeInTheDocument();
});