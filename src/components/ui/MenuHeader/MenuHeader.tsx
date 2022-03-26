import React, { FC } from 'react';
import classes from './MenuHeader.module.scss';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import { createAvatar } from '../../../utils/createAvatar';
import LogoutIcon from '@mui/icons-material/Logout';

interface MenuHeaderProps {
  username: string;
}

const MenuHeader: FC<MenuHeaderProps> = ({ username }) => {
  return (
    <Box className={classes.Container}>
      <Avatar src={createAvatar(username)} sx={{ width: 50, height: 50 }} />
      <Typography>{username}</Typography>
      <IconButton className={classes.Icon}>
        <LogoutIcon />
      </IconButton>
    </Box>
  );
};

export default MenuHeader;
