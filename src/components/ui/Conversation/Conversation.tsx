import React, { useEffect, useRef } from 'react';
import { Box, IconButton } from '@mui/material';
import classes from './Conversation.module.scss';
import ChatMessage from '../ChatMessage/ChatMessage';
import { v4 } from 'uuid';
import { Input } from '../index';
import { Message } from '../../../store/models/Chat';
import { useAppDispatch, useAppSelector } from '../../../store/app/hooks';
import { useForm } from 'react-hook-form';
import {
  conversationStart,
  fetchMessages,
  sendMessage,
} from '../../../store/actions/chatActions';
import { receiveMessage } from '../../../store/features/chatSlice';
import SendIcon from '@mui/icons-material/Send';

interface InputData {
  text: string;
}

const defaultValues: InputData = {
  text: '',
};

const Conversation = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { socket } = useAppSelector((state) => state.socket);
  const { receiver, conversation, messages } = useAppSelector(
    (state) => state.chat
  );
  const messagesRef = useRef<HTMLDivElement>(null);

  const dispatch = useAppDispatch();

  const scrollToBottom = () => {
    if (messages) {
      let lastMessage = messagesRef?.current?.lastElementChild;
      lastMessage?.scrollIntoView({
        behavior: 'smooth',
      });
    }
  };

  const { register, reset, handleSubmit } = useForm<InputData>({
    reValidateMode: 'onChange',
    defaultValues,
  });

  const onSubmit = (data: InputData) => {
    if (conversation?.id && user && receiver) {
      const message: Message = {
        senderId: user.id,
        conversationId: conversation.id,
        text: data.text,
      };
      socket.emit('send_message', {
        senderId: user.id,
        receiver: receiver,
        text: data.text,
      });
      dispatch(sendMessage(message));
    }
    reset();
  };

  useEffect(() => {
    // not optimized should execute when user sends first message
    if (receiver && user)
      dispatch(
        conversationStart({ senderId: user.id, receiverId: receiver.id, keyPair: [user.key, receiver.key] })
      );
  }, [receiver, dispatch, user]);

  useEffect(() => {
    if (receiver && conversation?.id) dispatch(fetchMessages(conversation?.id));
  }, [receiver, conversation, dispatch]);

  useEffect(() => {
    socket.on('receive_message', (data: Message) => {
      if (data.senderId === receiver?.id) {
        dispatch(receiveMessage(data));
      }
    });
  }, [receiver]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <>
      {receiver && (
        <>
          <Box className={classes.MessageContainer} ref={messagesRef}>
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
              {...register('text', { required: 'This field is required' })}
            />
            <IconButton>
              <SendIcon sx={{ color: '#2979FF' }} />
            </IconButton>
          </form>
        </>
      )}
    </>
  );
};

export default Conversation;
