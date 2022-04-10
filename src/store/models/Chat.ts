import { User } from './Auth';

export interface Message {
  conversationId: string;
  senderId: string;
  receiver?: User;
  text: string;
  time?: Date;
}

export interface ConversationRequest {
  senderId: string;
  receiverId: string;
  keyPair: (string | undefined)[];
}

export interface Conversation {
  id: string;
  keyPair: string[];
  lastMessage?: Message;
  user: User;
}
