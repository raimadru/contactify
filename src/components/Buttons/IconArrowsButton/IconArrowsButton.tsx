import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { ArrowDownward } from '@mui/icons-material';
import { IconButton } from '@mui/material';

interface IIconButton {
  handleSorting: (text: string) => void;
  text: string;
  sortFields?: string;
  sortOrder?: string;
}
export const IconArrowsButton = ({ handleSorting, text, sortFields, sortOrder }: IIconButton) => {
  return (
    <IconButton onClick={() => handleSorting(text)}>
      {sortFields === text && sortOrder === 'asc' ? (
        <ArrowUpwardIcon sx={{ fill: '#FFFFFF', fontSize: 'large' }} />
      ) : (
        <ArrowDownward sx={{ fill: '#FFFFFF', fontSize: 'large' }} />
      )}
    </IconButton>
  );
};
