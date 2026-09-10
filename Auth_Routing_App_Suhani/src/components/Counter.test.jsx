import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Counter } from './Counter';

describe('Counter Component Tests', () => {
  it('renders initial count as 0', () => {
    render(<Counter />);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 0');
  });

  it('increments count on Increment button click', () => {
    render(<Counter />);
    const incBtn = screen.getByText('Increment');
    fireEvent.click(incBtn);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 1');
  });

  it('decrements count on Decrement click without going below zero', () => {
    render(<Counter />);
    const decBtn = screen.getByText('Decrement');
    fireEvent.click(decBtn);
    expect(screen.getByTestId('count-value')).toHaveTextContent('Count: 0');
  });
});