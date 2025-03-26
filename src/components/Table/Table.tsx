import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
  Paper,
} from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { UserData } from '../../types/table.ts';
import { IconArrowsButton } from '../Buttons/IconArrowsButton/IconArrowsButton.tsx';

interface ITable {
  showIsActive?: boolean;
  filteredSortedTable: UserData[];
  handleClickTableRow: (id: string) => void;
  sortFields?: string;
  sortOrder?: string;
  setSortOrder?: any;
  setSortFields?: any;
}
export const TableComponent = ({
  sortFields,
  sortOrder,
  handleClickTableRow,
  filteredSortedTable,
  setSortFields,
  setSortOrder,
}: ITable) => {
  const handleSorting = (field: 'name' | 'city') => {
    if (sortFields === field) {
      setSortOrder((prev: string) => (prev === 'asc' ? 'desc' : 'asc'));
    } else {
      setSortFields(field);
      setSortOrder('asc');
    }
  };

  return (
    <TableContainer component={Paper}>
      <Table size={'small'}>
        <TableHead sx={{ backgroundColor: '#2196F3' }}>
          <TableRow>
            <TableCell sx={{ color: '#FFFFFF' }}>
              Name
              <IconArrowsButton
                handleSorting={() => handleSorting('name')}
                text={'name'}
                sortFields={sortFields}
                sortOrder={sortOrder}
              />
            </TableCell>
            <TableCell sx={{ color: '#FFFFFF' }}>
              City
              <IconArrowsButton
                handleSorting={() => handleSorting('city')}
                text={'city'}
                sortFields={sortFields}
                sortOrder={sortOrder}
              />
            </TableCell>
            <TableCell sx={{ color: '#FFFFFF', textAlign: 'left' }}>
              <FontAwesomeIcon icon={faEye} style={{ fontSize: 'x-large' }} />
            </TableCell>
            <TableCell sx={{ color: '#FFFFFF' }}>Email</TableCell>
            <TableCell sx={{ color: '#FFFFFF', textAlign: 'right' }}>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {filteredSortedTable.map((row: any) => (
            <TableRow
              sx={{ cursor: 'pointer', '&: hover': { backgroundColor: 'rgba(33,150,243,0.06)' } }}
              key={row.id}
              onClick={() => handleClickTableRow(row.id)}
            >
              <TableCell>
                <ColumnWrapper>
                  {row.name} {`${row.surname.charAt(0)}.`}
                </ColumnWrapper>
              </TableCell>
              <TableCell>
                <ColumnWrapper>{row.city}</ColumnWrapper>
              </TableCell>
              <TableCell sx={{ color: '#757575', textAlign: 'left' }}>
                <p>
                  {row.isActive && <FontAwesomeIcon icon={faEye} style={{ fontSize: 'x-large' }} />}
                </p>
              </TableCell>
              <TableCell>
                <ColumnWrapper>{row.email}</ColumnWrapper>
              </TableCell>
              <TableCell sx={{ textAlign: 'right' }}>
                <p>{row.phone}</p>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

interface IColumnWrapper {
  children: React.ReactNode;
}
const ColumnWrapper = ({ children }: IColumnWrapper) => {
  return <p style={{ borderRight: '2px solid rgba(33, 150, 243, 0.09)' }}>{children}</p>;
};
