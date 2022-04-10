import {
  conversationError,
  conversationStart,
  conversationSuccess,
  fetchMessages,
  fetchMessagesError,
  fetchMessagesSuccess,
  sendMessage,
  sendMessageError,
  sendMessageSuccess,
} from '../actions/chatActions';
import { AxiosError, AxiosResponse } from 'axios';
import { put } from 'redux-saga/effects';
import instance from '../../axios';
import { Chat } from '../../api';
import { Message } from '../models/Chat';
import { toast } from 'react-hot-toast';
import { Errors } from '../../errors';

export function* startConversationSaga(
  action: ReturnType<typeof conversationStart>
): Generator {
  try {
    const { data } = (yield instance.post(
      Chat.CONVERSATION,
      action.payload
    )) as AxiosResponse<{ id: string; keyPair: string[] }>;
    yield put(conversationSuccess(data));
  } catch (e) {
    const error = e as AxiosError;
    const errorMessage = error.response?.data.message;
    yield put(conversationError(errorMessage));
    toast.error(Errors.SOMETHING_WENT_WRONG);
  }
}

export function* sendMessageSaga(
  action: ReturnType<typeof sendMessage>
): Generator {
  try {
    const { data } = (yield instance.post(
      Chat.MESSAGE,
      action.payload
    )) as AxiosResponse<Message>;
    yield put(sendMessageSuccess(data));
  } catch (e) {
    const error = e as AxiosError;
    const errorMessage = error.response?.data.message;
    yield put(sendMessageError(errorMessage));
    toast.error(Errors.MESSAGE_FAILED);
  }
}

export function* fetchMessagesSaga(
  action: ReturnType<typeof fetchMessages>
): Generator {
  try {
    const { data } = (yield instance.get(
      `${Chat.CONVERSATION}/${action.payload}`
    )) as AxiosResponse<Message[]>;
    yield put(fetchMessagesSuccess(data));
  } catch (e) {
    const error = e as AxiosError;
    const errorMessage = error.response?.data.message;
    yield put(fetchMessagesError(errorMessage));
    toast.error(Errors.MESSAGE_FETCH);
  }
}
