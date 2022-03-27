import React, { FC } from 'react';
import classes from './ChatHeader.module.scss';
import OnlineUser from '../OnlineUser/OnlineUser';
import { Box, Divider } from '@mui/material';
import { useAppSelector } from '../../../store/app/hooks';

const ChatHeader: FC = () => {
  const { receiver } = useAppSelector((state) => state.chat);

  return (
    <>
      <Box className={classes.Container}>
        {receiver && <OnlineUser user={receiver} dot={false} />}
      </Box>
      <Divider flexItem />
    </>
  );
};

export default ChatHeader;
