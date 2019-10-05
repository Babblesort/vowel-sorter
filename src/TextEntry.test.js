import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TextEntry from './TextEntry';

test('renders input and button', () => {
  const { container } = render(<TextEntry />);

  expect(container.querySelector('input.letter-entry')).toBeInTheDocument();
  expect(container.querySelector('button.reset-button')).toBeInTheDocument();
});

test('calls onChange prop for onChange events', () => {
  const mockOnChange = jest.fn();

  const { container } = render(<TextEntry onChange={mockOnChange} />);
  const textInput = container.querySelector('input');

  fireEvent.change(textInput, { target: { value: 'z' } });
  expect(mockOnChange).toHaveBeenCalledTimes(1);
  expect(mockOnChange).toHaveBeenCalledWith('z');
});

test('calls onChange prop with last character in input for onChange events', () => {
  const mockOnChange = jest.fn();

  const { container } = render(<TextEntry onChange={mockOnChange} />);
  const textInput = container.querySelector('input');

  fireEvent.change(textInput, { target: { value: 'abc' } });
  expect(mockOnChange).toHaveBeenCalledTimes(1);
  expect(mockOnChange).toHaveBeenCalledWith('c');
});

test('reset button calls onReset prop for click events', () => {
  const mockOnChange = jest.fn();
  const mockOnReset = jest.fn();

  const { container } = render(
    <TextEntry onChange={mockOnChange} onReset={mockOnReset} />
  );
  const resetButton = container.querySelector('button');

  fireEvent.click(resetButton);
  expect(mockOnReset).toHaveBeenCalledTimes(1);
});

test('reset button clears any text in input', () => {
  const mockOnChange = jest.fn();
  const mockOnReset = jest.fn();

  const { container } = render(
    <TextEntry onChange={mockOnChange} onReset={mockOnReset} />
  );
  const textInput = container.querySelector('input');
  const resetButton = container.querySelector('button');

  fireEvent.change(textInput, { target: { value: 'abc' } });
  expect(textInput.value).toBe('abc');

  fireEvent.click(resetButton);
  expect(mockOnReset).toHaveBeenCalledTimes(1);
  expect(textInput.value).toBe('');
});
