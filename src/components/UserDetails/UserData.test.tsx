import { render, screen } from '@testing-library/react';
import { UserDetails } from './UserDetails.tsx';

jest.mock('', () => () => <div>Loading...</div>);
jest.mock('axios');

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () =>
      Promise.resolve({
        id: '1',
        name: 'Test1',
        surname: 'TestSurname1',
        city: 'City1',
        isActive: true,
        email: 'email@gmail.com',
        phone: '12345',
      }),
  });
});

describe('User Data', () => {
  test('render initial user window with loading if no user is selected', async () => {
    render(<UserDetails id={''} />);

    await expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  test('render user details in user card', async () => {
    const user = {
      id: '1',
      name: 'Test1',
      surname: 'TestSurname1',
      city: 'City1',
      isActive: true,
      email: 'email@gmail.com',
      phone: '12345',
    };

    render(<UserDetails id={user.id} />);

    const email = screen.getByText('email@gmail.com');

    await expect(email).toHaveAttribute('href', 'mailto:email@gmail.com');
  });
});
