import React, { FC } from 'react';
import classes from './Layout.module.scss';
import { Typography } from '@mui/material';

const Layout: FC = ({ children }) => {
  return (
    <div className={classes.Container}>
      <div>
        <Typography>Navbar</Typography>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;
