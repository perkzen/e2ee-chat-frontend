import React, { FC } from 'react';
import classes from './Layout.module.scss';
import { AuthModal, Menu } from '../index';
import { Box } from '@mui/material';
import { useAppSelector } from '../../../store/app/hooks';

const Layout: FC = ({ children }) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <div className={classes.PageContent}>
      <Box className={classes.Container}>
        <Menu />
        <Box>{children}</Box>
      </Box>
      <AuthModal open={!user} />
    </div>
  );
};

export default Layout;
