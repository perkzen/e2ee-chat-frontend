import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { io, Socket } from 'socket.io-client';
import { User } from '../models/Auth';
import { logout } from './authSlice';

interface SocketState {
  socket: Socket;
}

const initialState: SocketState = {
  socket: io('http://localhost:8080'),
};

const socketSlice = createSlice({
  name: 'socket',
  initialState,
  reducers: {
    joinChat: (state, action: PayloadAction<User>) => {
      state.socket.emit('join', action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.socket.emit('leave');
    });
  },
});

export const { joinChat } = socketSlice.actions;
export default socketSlice.reducer;
