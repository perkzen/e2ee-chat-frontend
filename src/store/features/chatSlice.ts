import { User } from '../models/Auth';
import { Message } from '../models/Chat';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface ChatState {
  receiver: User | null;
  conversationId: string | null;
  messages: Message[];
}

const initialState: ChatState = {
  receiver: null,
  conversationId: null,
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    selectReceiver: (state, action: PayloadAction<User>) => {
      state.receiver = action.payload;
    },
  },
});

export const { selectReceiver } = chatSlice.actions;

export default chatSlice.reducer;
