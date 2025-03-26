import { fireEvent, render, screen } from '@testing-library/react';
import { MainPage } from './MainPage.tsx';

describe('Main page', () => {
  test('render checkbox component with unchecked and checked to filter table data', async () => {
    render(<MainPage />);

    const checkbox = await screen.getByRole('checkbox');

    await expect(checkbox).toBeInTheDocument();
    await expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    await expect(checkbox).toBeChecked();
  });
});
