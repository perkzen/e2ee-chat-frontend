import React, { FC } from 'react';
import classes from './MenuHeader.module.scss';
import { Avatar, Box, IconButton, Typography } from '@mui/material';
import { createAvatar } from '../../../utils/createAvatar';
import LogoutIcon from '@mui/icons-material/Logout';
import { useAppDispatch, useAppSelector } from '../../../store/app/hooks';
import { logout } from '../../../store/features/authSlice';

const MenuHeader: FC = () => {
  const dispatch = useAppDispatch();
  const { user } = useAppSelector((state) => state.auth);

  return (
    <Box className={classes.Container}>
      {user && (
        <>
          <Avatar
            src={createAvatar(user.username)}
            sx={{ width: 50, height: 50 }}
          />
          <Typography>{user.username}</Typography>
          <IconButton
            className={classes.Icon}
            onClick={() => dispatch(logout())}
          >
            <LogoutIcon />
          </IconButton>
        </>
      )}
    </Box>
  );
};

export default MenuHeader;
