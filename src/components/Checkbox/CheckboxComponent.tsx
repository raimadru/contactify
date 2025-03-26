import { Checkbox, FormControlLabel } from '@mui/material';
import React from 'react';

interface ICheckboxComponent {
  checked: boolean;
  onChange: (e: React.ChangeEvent<any>) => void;
  label: string;
}
export const CheckboxComponent = ({ checked, onChange, label }: ICheckboxComponent) => {
  return (
    <FormControlLabel
      control={
        <Checkbox
          data-testid="checkbox"
          sx={{
            color: '#FFF',
            '&.Mui-checked': {
              color: '#1CE9B6',
            },
          }}
        />
      }
      onChange={onChange}
      checked={checked}
      label={label}
    />
  );
};
