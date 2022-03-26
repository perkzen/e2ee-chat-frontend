import { createAction } from '@reduxjs/toolkit';
import { User } from '../models/Auth';

export const AUTH_SLICE = 'auth';

export const login = createAction<{ username: string; password: string }>(
  `${AUTH_SLICE}/login`
);
export const loginSuccess = createAction<User>(`${AUTH_SLICE}/loginSuccess`);
export const loginError = createAction<string>(`${AUTH_SLICE}/loginError`);

export const registerUser = createAction<{
  username: string;
  password1: string;
  password2: string;
}>(`${AUTH_SLICE}/register`);
export const registerError = createAction<string>(
  `${AUTH_SLICE}/registerError`
);
