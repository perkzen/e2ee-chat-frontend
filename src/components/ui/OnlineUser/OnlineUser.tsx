import React, { FC } from 'react';
import classes from './OnlineUser.module.scss';
import { Avatar, Badge, Box, Typography } from '@mui/material';
import { createAvatar } from '../../../utils/createAvatar';
import './Dot.scss';

interface OnlineUserProps {
  username: string;
}

const OnlineUser: FC<OnlineUserProps> = ({ username }) => {
  return (
    <Box className={classes.Container}>
      <Badge
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        variant={'dot'}
        overlap="circular"
        color={'success'}
      >
        <Avatar src={createAvatar(username)} sx={{ width: 50, height: 50 }} />
      </Badge>
      <Typography>{username}</Typography>
    </Box>
  );
};

export default OnlineUser;
