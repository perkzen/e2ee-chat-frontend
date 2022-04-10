import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { io, Socket } from 'socket.io-client';
import { User } from '../models/Auth';
import { logout } from './authSlice';
import { userStorage } from '../../utils/localStorage';
import {generateKey} from "../../utils/crypto";

interface SocketState {
  socket: Socket;
}

const initialState: SocketState = {
  socket: io('ws://localhost:8080', {
    reconnection: true,
    reconnectionDelay: 1000,
    reconnectionDelayMax: 10000,
    reconnectionAttempts: Infinity,
    auth: userStorage.getUser(),
  }),
};

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    joinChat: (state, action: PayloadAction<User>) => {
      state.socket.emit('login', {...action.payload, key:generateKey()});
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.socket.emit('logout', userStorage.getUser());
    });
  },
});

export const { joinChat } = socketSlice.actions;
export default socketSlice.reducer;
