import React, { FC, LegacyRef } from 'react';
import classes from './ChatMessage.module.scss';
import { Message } from '../../../store/models/Chat';
import { classNames } from '../../../utils/classNames';
import { useAppSelector } from '../../../store/app/hooks';
import {decryptMessage} from "../../../utils/crypto";

interface ChatMessageProps {
  message: Message;
  messageRef?: (node?: Element) => void;
}

const ChatMessage: FC<ChatMessageProps> = ({ message, messageRef }) => {
  const { user } = useAppSelector((state) => state.auth);
  const { conversation } = useAppSelector(
      (state) => state.chat
  );

  const { text } = message;

  return (
    <div
      className={classNames(
        classes.Container,
        user?.id === message.senderId
          ? classes.JustifyEnd
          : classes.JustifyStart
      )}
      ref={messageRef as LegacyRef<HTMLDivElement>}
    >
      <div
        className={classNames(
          classes.MessageBox,
          user?.id === message.senderId ? classes.SentByMe : classes.NotSentByMe
        )}
      >
        <p className={classes.MessageText}>{decryptMessage(text, conversation!.computedSecret)}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
