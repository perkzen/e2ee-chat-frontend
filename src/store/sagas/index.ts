import { login, registerUser } from '../actions/authActions';
import { LoginSaga, RegisterSaga } from './authSaga';
import { takeLatest } from 'redux-saga/effects';

export function* watchAuth(): Generator {
  yield takeLatest(login.type, LoginSaga);
  yield takeLatest(registerUser.type, RegisterSaga);
}
