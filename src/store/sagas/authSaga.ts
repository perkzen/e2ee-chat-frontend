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
import { joinChat } from '../features/socketSlice';
import { toast } from 'react-hot-toast';

export function* LoginSaga(action: ReturnType<typeof login>): Generator {
  try {
    yield put(loginStart());
    const { data } = (yield instance.post(
      Auth.LOGIN,
      action.payload
    )) as AxiosResponse<User>;
    yield put(loginSuccess(data));
    yield put(joinChat(data));
    toast.success('Login successful');
  } catch (e) {
    const error = e as AxiosError;
    const errorMessage = error.response?.data.message;
    yield put(loginError(errorMessage));
  }
}

export function* RegisterSaga(
  action: ReturnType<typeof registerUser>
): Generator {
  try {
    yield put(registerStart());
    yield instance.post(Auth.REGISTER, action.payload);
    toast.success('Account was created successfully');
  } catch (e) {
    const error = e as AxiosError;
    const errorMessage = error.response?.data.message;
    yield put(registerError(errorMessage));
  }
}
