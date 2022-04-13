import { createAction } from '@reduxjs/toolkit';
import {Conversation, ConversationRequest, Message} from '../models/Chat';

export const CHAT_SLICE = 'chat';

export const conversationStart = createAction<ConversationRequest>(
  `${CHAT_SLICE}/conversationLoading`
);
export const conversationSuccess = createAction<Conversation>(
  `${CHAT_SLICE}/conversationSuccess`
);
export const conversationError = createAction<string>(
  `${CHAT_SLICE}/conversationError`
);

export const sendMessage = createAction<Message>(
  `${CHAT_SLICE}/sendMessageStart`
);
export const sendMessageSuccess = createAction<Message>(
  `${CHAT_SLICE}/sendMessageSuccess`
);
export const sendMessageError = createAction<string>(
  `${CHAT_SLICE}/sendMessageError`
);

export const fetchMessages = createAction<string>(
  `${CHAT_SLICE}/fetchMessagesLoading`
);
export const fetchMessagesSuccess = createAction<Message[]>(
  `${CHAT_SLICE}/fetchMessagesSuccess`
);
export const fetchMessagesError = createAction<string>(
  `${CHAT_SLICE}/fetchMessagesError`
);
