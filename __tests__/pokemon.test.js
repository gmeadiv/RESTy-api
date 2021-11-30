
import { setUpWorker, rest } from 'msw';
import { render, screen } from '@testing-library/react';

import '@testing-library/jest-dom/extend-expect';

import Pokemon from '../pokemon/Pokemon.js';

describe ('Testing the pokemon component', () => {
  it('should', () => {
    render(<Pokemon />)

    let results = screen.getByTestId('results');

    expect(results).toBeInTheDocument()
  })
});
