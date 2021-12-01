import { render, screen } from '@testing-library/react';
import App from '../src/app.js';

describe('renders', () => {

  it('should render', () => {
    render(<App />);
    const linkElement = screen.getByTest();
    expect(linkElement).toBeInTheDocument();
  })
  
});
