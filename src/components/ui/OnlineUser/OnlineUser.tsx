import React, { FC } from 'react';
import classes from './OnlineUser.module.scss';
import { Avatar, Badge, Box, Typography } from '@mui/material';
import { createAvatar } from '../../../utils/createAvatar';
import './Dot.scss';
import { User } from '../../../store/models/Auth';
import { useAppDispatch } from '../../../store/app/hooks';
import { selectReceiver } from '../../../store/features/chatSlice';

interface OnlineUserProps {
  user: User;
  dot?: boolean;
  message?: string;
}

const OnlineUser: FC<OnlineUserProps> = ({ user, dot, message = true }) => {
  const dispatch = useAppDispatch();

  const handleClick = () => {
    dispatch(selectReceiver(user));
  };

  return (
    <Box className={classes.Container} onClick={handleClick}>
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
          <Avatar
            src={createAvatar(user.username)}
            sx={{ width: 50, height: 50 }}
          />
        </Badge>
      ) : (
        <Avatar
          src={createAvatar(user.username)}
          sx={{ width: 50, height: 50 }}
        />
      )}
      <Box>
        <Typography className={classes.User}>{user.username}</Typography>
        {message && <Typography>{message}</Typography>}
      </Box>
    </Box>
  );
};

export default OnlineUser;
