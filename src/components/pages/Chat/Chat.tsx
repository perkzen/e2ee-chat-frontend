import React, { FC } from 'react';
import classes from './Chat.module.scss';
import { Box } from '@mui/material';
import { ChatHeader, Input } from '../../ui';

const Chat: FC = () => {
  return (
    <Box className={classes.Container}>
      <ChatHeader />
      <Box className={classes.ChatMessage}>Chat messages</Box>
      <Box className={classes.InputContainer}>
        <Input placeholder={'Type a message...'} className={classes.Input} />
      </Box>
    </Box>
  );
};

export default Chat;
