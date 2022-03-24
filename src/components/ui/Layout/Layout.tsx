import React, { FC } from 'react';
import classes from './Layout.module.scss';
import { Menu } from '../index';

const Layout: FC = ({ children }) => {
  return (
    <div className={classes.Container}>
      <Menu />
      <div>{children}</div>
    </div>
  );
};

export default Layout;
