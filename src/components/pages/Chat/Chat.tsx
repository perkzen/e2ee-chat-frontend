import React, { FC, useState } from 'react';
import classes from './Chat.module.scss';
import { Box } from '@mui/material';
import { ChatHeader, Input } from '../../ui';
import ChatMessage from '../../ui/ChatMessage/ChatMessage';
import { v4 } from 'uuid';
import { useForm } from 'react-hook-form';
import { useAppSelector } from '../../../store/app/hooks';

interface InputData {
  text: string;
}

const defaultValues: InputData = {
  text: '',
};

const Chat: FC = () => {
  const [messages, setMessage] = useState([
    { text: 'test', senderId: 'dsadsa', conversationId: 'ddasdas' },
    {
      text: 'test',
      senderId: 'dsadsa',
      conversationId: 'ddasdas',
    },
    { text: 'test', senderId: 'dsadsa', conversationId: 'ddasdas' },
  ]);

  const { user } = useAppSelector((state) => state.auth);

  const { register, reset, handleSubmit } = useForm<InputData>({
    reValidateMode: 'onChange',
    defaultValues,
  });

  const onSubmit = (data: InputData) => {
    setMessage([
      ...messages,
      { senderId: user!.id, text: data.text, conversationId: 'dada' },
    ]);
    reset();
  };

  return (
    <Box className={classes.Container}>
      <ChatHeader />
      <Box className={classes.ChatMessage}>
        {messages.map((message) => (
          <ChatMessage message={message} key={v4()} />
        ))}
      </Box>
      <form
        className={classes.InputContainer}
        onSubmit={handleSubmit(onSubmit)}
      >
        <Input
          placeholder={'Type a message...'}
          className={classes.Input}
          {...register('text')}
        />
      </form>
    </Box>
  );
};

export default Chat;
