import React, { FC } from 'react';
import classes from './UserList.module.scss';
import OnlineUser from '../OnlineUser/OnlineUser';
import { v4 } from 'uuid';
import { Box } from '@mui/material';

interface OnlineTabProps {
  users: string[];
}

const UserList: FC<OnlineTabProps> = ({ users }) => {
  return (
    <Box className={classes.Container}>
      {users.map((user) => (
        <OnlineUser username={user} key={v4()} />
      ))}
    </Box>
  );
};

export default UserList;
