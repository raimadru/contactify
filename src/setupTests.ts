import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
  Promise.resolve({
    json: () => Promise.resolve(mockData),
  });
});

const mockData = [
  {
    id: '1',
    name: 'Test1',
    surname: 'TestSurname1',
    city: 'City1',
    isActive: true,
    email: 'email@gmail.com',
    phone: '12345',
  },
  {
    id: '2',
    name: 'Test2',
    surname: 'TestSurname2',
    city: 'City2',
    isActive: false,
    email: 'email2@gmail.com',
    phone: '54321',
  },
];
