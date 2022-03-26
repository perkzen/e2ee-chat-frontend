import React, { FC } from 'react';
import classes from './Layout.module.scss';
import { Menu } from '../index';
import { Box } from '@mui/material';

const Layout: FC = ({ children }) => {
  return (
    <Box className={classes.Container}>
      <Menu />
      <Box sx={{ paddingX: '4rem' }}>{children}</Box>
    </Box>
  );
};

export default Layout;
