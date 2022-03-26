import React, { FC } from 'react';
import classes from './OnlineUser.module.scss';
import { Avatar, Badge, Box, Typography } from '@mui/material';
import { createAvatar } from '../../../utils/createAvatar';
import './Dot.scss';

interface OnlineUserProps {
  username: string;
  dot?: boolean;
}

const OnlineUser: FC<OnlineUserProps> = ({ username, dot = true }) => {
  return (
    <Box className={classes.Container}>
      {dot ? (
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
      ) : (
        <Avatar src={createAvatar(username)} sx={{ width: 50, height: 50 }} />
      )}

      <Typography>{username}</Typography>
    </Box>
  );
};

export default OnlineUser;
