import React, { FC } from 'react';
import classes from './MenuHeader.module.scss';
import { Avatar, Box, Typography } from '@mui/material';
import { createAvatar } from '../../../utils/createAvatar';

interface MenuHeaderProps {
  username: string;
}

const MenuHeader: FC<MenuHeaderProps> = ({ username }) => {
  return (
    <Box className={classes.Container}>
      <Avatar src={createAvatar(username)} sx={{ width: 50, height: 50 }} />
      <Typography>{username}</Typography>
    </Box>
  );
};

export default MenuHeader;
