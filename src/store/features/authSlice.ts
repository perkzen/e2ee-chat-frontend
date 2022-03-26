import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { userStorage } from '../../utils/localStorage';
import { User } from '../models/Auth';

interface AuthState {
  user: User | null;
  error: string | null;
  loading: boolean;
}

const initialState: AuthState = {
  user: userStorage.getUser() || null,
  error: null,
  loading: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<User>) => {
      userStorage.setUser(action.payload);
      state.user = action.payload;
      state.loading = false;
    },
    loginError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    logout: (state) => {
      userStorage.clearUser();
      state.user = null;
    },
    registerStart: (state) => {
      state.loading = true;
      state.error = null;
    },
    registerError: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { loginStart, registerStart, logout } = authSlice.actions;
export default authSlice.reducer;
