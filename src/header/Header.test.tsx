//import { render, screen } from '../test-utils';
import { render, screen } from '@testing-library/react';
import { Header } from '../header/Header';

describe('Header', () => {
  it('should display title', () => {
    render(<Header />);

    expect(screen.getByText('Friday Insurance')).toBeInTheDocument();
  });
});