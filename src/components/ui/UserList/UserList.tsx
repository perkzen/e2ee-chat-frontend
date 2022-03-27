import React, { FC } from 'react';
import classes from './UserList.module.scss';
import OnlineUser from '../OnlineUser/OnlineUser';
import { v4 } from 'uuid';
import { Box } from '@mui/material';
import { User } from '../../../store/models/Auth';
import { useAppSelector } from '../../../store/app/hooks';

interface OnlineTabProps {
  users: User[];
}

const UserList: FC<OnlineTabProps> = ({ users }) => {
  const sessionUser = useAppSelector((state) => state.auth.user);

  return (
    <Box className={classes.Container}>
      {users.map((user) =>
        sessionUser?.username !== user.username ? (
          <OnlineUser user={user} key={v4()} />
        ) : null
      )}
    </Box>
  );
};

export default UserList;
