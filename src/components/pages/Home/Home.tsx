import React, { FC } from 'react';
import { Box, Typography } from '@mui/material';

const Home: FC = () => {
  return (
    <Box>
      <Typography sx={{ paddingTop: '1rem' }} variant={'h6'}>
        ChatHeader
      </Typography>
    </Box>
  );
};

export default Home;
