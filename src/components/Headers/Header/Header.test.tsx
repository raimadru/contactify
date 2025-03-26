import { render, waitFor, screen } from '@testing-library/react';
import { Header } from './Header.tsx';

describe('Header', () => {
  test('locate main header with correct label', async () => {
    render(<Header label="Contactify" />);

    const text = await waitFor(() => screen.getByText('Contactify'));

    expect(text).toBeInTheDocument();
  });
});
