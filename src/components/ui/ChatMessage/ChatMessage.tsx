import React, { FC, LegacyRef } from 'react';
import classes from './ChatMessage.module.scss';
import { Message } from '../../../store/models/Chat';
import { classNames } from '../../../utils/classNames';
import { useAppSelector } from '../../../store/app/hooks';

interface ChatMessageProps {
  message: Message;
  messageRef?: (node?: Element) => void;
}

const ChatMessage: FC<ChatMessageProps> = ({ message, messageRef }) => {
  const { user } = useAppSelector((state) => state.auth);

  return (
    <>
      <div
        className={classNames(
          classes.Container,
          user?.id === message.senderId
            ? classes.justifyEnd
            : classes.justifyStart
        )}
        ref={messageRef as LegacyRef<HTMLDivElement>}
      >
        <div
          className={classNames(
            classes.messageBox,
            user?.id === message.senderId
              ? classes.SentByMe
              : classes.NotSentByMe
          )}
        >
          <p className={classNames(classes.messageText)}>{message.text}</p>
        </div>
      </div>
    </>
  );
};

export default ChatMessage;
