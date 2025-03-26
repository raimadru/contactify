import { Box, CircularProgress } from '@mui/material';

export const LoadingComponent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '10rem',
      }}
    >
      <CircularProgress />
      <span>Loading...</span>
    </Box>
  );
};
