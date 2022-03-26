import React, { FC } from 'react';
import classes from './Chat.module.scss';
import { Box } from '@mui/material';
import { ChatHeader, Input } from '../../ui';
import { Message } from '../../../store/models/Chat';
import ChatMessage from '../../ui/ChatMessage/ChatMessage';
import { v4 } from 'uuid';

const messages: Message[] = [
  { text: 'test', senderId: 'dsadsa', conversationId: 'ddasdas' },
  {
    text: 'test',
    senderId: 'dsadsa',
    conversationId: 'ddasdas',
  },
  { text: 'test', senderId: 'dsadsa', conversationId: 'ddasdas' },
];

const Chat: FC = () => {
  return (
    <Box className={classes.Container}>
      <ChatHeader />
      <Box className={classes.ChatMessage}>
        {messages.map((message) => (
          <ChatMessage message={message} key={v4()} />
        ))}
      </Box>
      <Box className={classes.InputContainer}>
        <Input placeholder={'Type a message...'} className={classes.Input} />
      </Box>
    </Box>
  );
};

export default Chat;
