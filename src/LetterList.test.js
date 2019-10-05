import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import LetterList from './LetterList';

test('renders label', () => {
  const label = 'some label';
  const letters = [];

  const { getByText } = render(<LetterList label={label} letters={letters} />);

  expect(getByText('some label - (0)')).toBeInTheDocument();
});

test('renders label for n letters', () => {
  const label = 'some label';
  const letters = ['a', 'b'];

  const { getByText } = render(<LetterList label={label} letters={letters} />);

  expect(getByText('some label - (2)')).toBeInTheDocument();
});

test('renders empty letters array', () => {
  const label = 'some label';
  const letters = [];

  const { container } = render(<LetterList label={label} letters={letters} />);

  expect(container.querySelectorAll('div.letter')).toHaveLength(0);
});

test('renders letters array', () => {
  const label = 'some label';
  const letters = ['a', 'b'];

  const { container, getByText } = render(
    <LetterList label={label} letters={letters} />
  );

  expect(container.querySelectorAll('div.letter')).toHaveLength(2);
  expect(getByText('a', { selector: 'div.letter' })).toBeInTheDocument();
  expect(getByText('b', { selector: 'div.letter' })).toBeInTheDocument();
});
