import React from 'react';
import ReactDOM from 'react-dom';
import { render, cleanup, screen } from '@testing-library/react';

import Button from '../Button';

afterEach(cleanup);

it('renders button correctly', () => {
  const div = document.createElement('id');
  ReactDOM.render(<Button />, div);
});

it('renders text button correctly', () => {
  render(<Button text='No Problem' />);
  expect(screen.getByTestId('button')).toHaveTextContent('No Problem');
});

it('renders onlyIcon button correctly', () => {
  render(<Button onlyIcon={true} text='No Problem' />);
  expect(screen.getByTestId('button')).toHaveTextContent('');
});
