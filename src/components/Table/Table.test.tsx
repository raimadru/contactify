import { render, screen, waitFor } from '@testing-library/react';
import { TableComponent } from './Table.tsx';
import { CheckboxComponent } from '../Checkbox/CheckboxComponent.tsx';

const mockTableData = [
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

describe('Table', () => {
  test('render table with data', () => {
    const mockClickOnRow = jest.fn();

    render(
      <TableComponent
        showIsActive={false}
        filteredSortedTable={mockTableData}
        handleClickTableRow={mockClickOnRow}
      />
    );

    expect(screen.getByText('Name')).toBeInTheDocument();
    expect(screen.getByText('Email')).toBeInTheDocument();
    expect(screen.getByText('Phone')).toBeInTheDocument();
    expect(screen.queryByText('email@gmail.com')).toBeInTheDocument();
    expect(screen.queryByText('email2@gmail.com')).toBeInTheDocument();
  });

  test('render table and show all table rows when checkbox is unchecked', async () => {
    const mockClickOnRow = jest.fn();

    render(
      <TableComponent
        showIsActive={true}
        filteredSortedTable={mockTableData}
        handleClickTableRow={mockClickOnRow}
      />
    );
    render(<CheckboxComponent checked={true} onChange={mockClickOnRow} label={'Show active'} />);

    await screen.getByRole('checkbox').click();

    expect(mockClickOnRow).toHaveBeenCalledTimes(1);

    await waitFor(() => {
      expect(screen.queryByText('email@gmail.com')).toBeInTheDocument();
      expect(screen.queryByText('email2@gmail.com')).toBeInTheDocument();
    });
  });

  test('show correct row data when name and city is selected in filters and button is clicked', () => {});

  test('sort table in ascending order when arrow icon is clicked', () => {});
});
