import React from 'react';
import { PrimaryButton } from '../../Buttons/PrimaryButton/PrimaryButton';
import { faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SecondaryHeader.module.scss';
import { MenuItem, styled, TextField } from '@mui/material';
import { CheckboxComponent } from '../../Checkbox/CheckboxComponent';

interface IFiltersSecondaryHeader {
  citiesList: string[];
  showIsActive: boolean;
  setShowIsActive: (isActive: boolean) => void;
  handleByCityChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleFilterOnButtonClick?: () => void;
  handleNameChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const SecondaryHeader = ({
  citiesList,
  showIsActive,
  setShowIsActive,
  handleByCityChange,
  handleFilterOnButtonClick,
  handleNameChange,
}: IFiltersSecondaryHeader) => {
  const handleFilterActiveItemsChecked = (e: React.ChangeEvent<HTMLInputElement>) =>
    setShowIsActive(e.target.checked);

  return (
    <div className={styles.mainHeader}>
      <CustomizedInput
        onChange={handleNameChange}
        className={styles.input}
        id="outlined-name"
        name={'Name'}
        label={'Name'}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
      />
      <CustomizedInput
        onChange={handleByCityChange}
        className={styles.input}
        id="outlined-select"
        select
        label={'City'}
        defaultValue={''}
        slotProps={{
          inputLabel: {
            shrink: true,
          },
        }}
      >
        {citiesList.map((option: string, index: number) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </CustomizedInput>
      <div className={styles.checkboxWrappers}>
        <CheckboxComponent
          checked={showIsActive}
          onChange={handleFilterActiveItemsChecked}
          label={'Show active'}
        />
        <FontAwesomeIcon icon={faEye} style={{ fontSize: 'x-large' }} />
      </div>
      <PrimaryButton label={'Filter'} onClick={handleFilterOnButtonClick} />
    </div>
  );
};

const CustomizedInput = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    height: '40px',
    '& fieldset': {
      borderColor: '#fff',
    },
    '&: hover fieldset': {
      borderColor: '#fff',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#fff',
    },
  },
  '& .MuiInputLabel-root': {
    color: '#fff',
  },
  '& .MuiInputLabel-root.Mui-focused': {
    color: '#fff',
  },
  '& .MuiInputBase-input': {
    color: '#fff',
  },
  '& .MuiSelect-icon': {
    color: '#fff',
  },
});
