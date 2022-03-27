import React, { FC } from 'react';
import classes from './Chat.module.scss';
import { Box } from '@mui/material';
import { ChatHeader, Conversation } from '../../ui';

const Chat: FC = () => {
  return (
    <Box className={classes.Container}>
      <ChatHeader />
      <Conversation />
    </Box>
  );
};

export default Chat;
