import React, { useEffect, useRef } from 'react';
import { Box } from '@mui/material';
import classes from '../../pages/Chat/Chat.module.scss';
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

interface InputData {
  text: string;
}

const defaultValues: InputData = {
  text: '',
};

const Conversation = () => {
  const { user } = useAppSelector((state) => state.auth);
  const { socket } = useAppSelector((state) => state.socket);
  const { receiver, conversationId, messages } = useAppSelector(
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
    if (conversationId && user && receiver) {
      const message: Message = {
        senderId: user.id,
        conversationId: conversationId,
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
        conversationStart({ senderId: user.id, receiverId: receiver.id })
      );
  }, [receiver, dispatch, user]);

  useEffect(() => {
    if (receiver && conversationId) dispatch(fetchMessages(conversationId));
  }, [receiver, conversationId, dispatch]);

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
          <div className={classes.ScrollableBox}>
            <Box className={classes.ChatMessage} ref={messagesRef}>
              {messages.map((message) => (
                <ChatMessage message={message} key={v4()} />
              ))}
            </Box>
          </div>
          <form
            className={classes.InputContainer}
            onSubmit={handleSubmit(onSubmit)}
          >
            <Input
              placeholder={'Type a message...'}
              className={classes.Input}
              {...register('text', { required: 'This field is required' })}
            />
          </form>
        </>
      )}
    </>
  );
};

export default Conversation;
