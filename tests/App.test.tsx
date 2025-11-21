import { render, screen } from '@testing-library/react';
import App from '../src/App';

describe('App', () => {
  test('renders hello world', () => {
    render(<App />);
    expect(screen.getByText('Hello World!')).toBeInTheDocument();
  });
});

