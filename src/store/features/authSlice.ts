import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userStorage } from '../../utils/localStorage';
import { User } from '../models/Auth';

export interface AuthState {
  user?: User;
  authError: string;
}

const initialState: AuthState = {
  user: userStorage.getUser(),
  authError: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<User>) => {
      userStorage.setUser(action.payload);
      state.user = action.payload;
    },
    logout: (state) => {
      userStorage.clearUser();
      state.user = undefined;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
