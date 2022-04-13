import { login, registerUser } from '../actions/authActions';
import { LoginSaga, RegisterSaga } from './authSaga';
import { takeLatest } from 'redux-saga/effects';
import {
  conversationStart,
  fetchMessages,
  sendMessage,
} from '../actions/chatActions';
import {
  fetchMessagesSaga,
  sendMessageSaga,
  startConversationSaga,
} from './chatSaga';

export function* watchAuth(): Generator {
  yield takeLatest(login.type, LoginSaga);
  yield takeLatest(registerUser.type, RegisterSaga);
}

export function* watchChat(): Generator {
  yield takeLatest(conversationStart.type, startConversationSaga);
  yield takeLatest(sendMessage.type, sendMessageSaga);
  yield takeLatest(fetchMessages.type, fetchMessagesSaga);
}
