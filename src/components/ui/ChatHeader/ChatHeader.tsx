import React, { FC } from 'react';
import classes from './ChatHeader.module.scss';
import OnlineUser from '../OnlineUser/OnlineUser';
import { Box, Divider } from '@mui/material';

const ChatHeader: FC = () => {
  return (
    <>
      <Box className={classes.Container}>
        <OnlineUser username={'Grega Suljo'} dot={false} />
      </Box>
      <Divider flexItem />
    </>
  );
};

export default ChatHeader;
