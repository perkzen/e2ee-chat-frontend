import React, { FC } from 'react';
import classes from './Chat.module.scss';
import { Box } from '@mui/material';
import { ChatHeader } from '../../ui';
import Conversation from '../../ui/Conversation/Conversation';

const Chat: FC = () => {
  return (
    <Box className={classes.Container}>
      <ChatHeader />
      <Conversation />
    </Box>
  );
};

export default Chat;
