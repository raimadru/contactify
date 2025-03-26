import { render, screen, waitFor } from '@testing-library/react';
import { PrimaryButton } from './PrimaryButton.tsx';

describe('Primary button', () => {
  test('render filter button with correct label', async () => {
    const clickMock = jest.fn();

    render(<PrimaryButton label={'Filter'} onClick={clickMock} />);

    const text = await waitFor(() => screen.getByText('Filter'));

    expect(text).toBeInTheDocument();
  });
});
