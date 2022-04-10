import { User } from '../models/Auth';
import { Message } from '../models/Chat';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { logout } from './authSlice';

export interface ChatState {
  receiver: User | null;
  conversation: { id: string; keyPair: string[] } | null;
  messages: Message[];
  loading: boolean;
  error: string | null;
}

const initialState: ChatState = {
  receiver: null,
  conversation: null,
  messages: [],
  loading: false,
  error: null,
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectReceiver: (state, action: PayloadAction<User>) => {
      state.receiver = action.payload;
    },
    conversationLoading: (state) => {
      state.loading = true;
    },
    conversationSuccess: (
      state,
      action: PayloadAction<{ id: string; keyPair: string[] }>
    ) => {
      state.conversation = action.payload;
      state.loading = false;
    },
    conversationError: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
    sendMessageSuccess: (state, action: PayloadAction<Message>) => {
      state.messages = [...state.messages, action.payload];
    },
    sendMessageError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
    },
    receiveMessage: (state, action) => {
      state.messages = [...state.messages, action.payload];
    },
    fetchMessagesLoading: (state) => {
      state.loading = true;
    },
    fetchMessagesSuccess: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
      state.loading = false;
    },
    fetchMessagesError: (state, action: PayloadAction<string>) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logout, (state) => {
      state.receiver = null;
      state.messages = [];
      state.conversation = null;
    });
  },
});

export const { selectReceiver, receiveMessage } = chatSlice.actions;

export default chatSlice.reducer;
