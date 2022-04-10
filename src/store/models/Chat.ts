export interface Message {
    conversationId: string;
    senderId: string;
    text: string;
    time?: Date;
}

export interface ConversationRequest {
    senderId: string;
    receiverId: string;
    keyPair: (string | undefined)[];
}
