import {
  login,
  loginError,
  loginSuccess,
  registerUser,
  registerError,
} from '../actions/authActions';
import { put } from 'redux-saga/effects';
import instance from '../../axios';
import { Auth } from '../../api';
import { AxiosError, AxiosResponse } from 'axios';
import { User } from '../models/Auth';
import { loginStart, registerStart } from '../features/authSlice';

export function* LoginSaga(action: ReturnType<typeof login>): Generator {
  try {
    yield put(loginStart());
    const { data } = (yield instance.post(
      Auth.LOGIN,
      action.payload
    )) as AxiosResponse<User>;
    yield put(loginSuccess(data));
  } catch (e) {
    const error = e as AxiosError;
    const errorMessage = error.response?.data.message;
    yield put(loginError(errorMessage));
    console.log(errorMessage);
  }
}

export function* RegisterSaga(
  action: ReturnType<typeof registerUser>
): Generator {
  try {
    yield put(registerStart());
    yield instance.post(Auth.REGISTER, action.payload);
  } catch (e) {
    const error = e as AxiosError;
    const errorMessage = error.response?.data.message;
    yield put(registerError(errorMessage));
    console.log(errorMessage);
  }
}
