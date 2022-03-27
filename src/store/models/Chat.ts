export interface Message {
  conversationId: string;
  senderId: string;
  text: string;
}

export interface ConversationRequest {
  senderId: string;
  receiverId: string;
}
