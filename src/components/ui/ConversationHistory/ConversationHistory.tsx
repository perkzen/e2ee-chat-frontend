import { Box } from '@mui/material';
import React, { FC } from 'react';
import { Conversation } from '../../../store/models/Chat';
import OnlineUser from '../OnlineUser/OnlineUser';
import { v4 } from 'uuid';
import classes from './ConversationHistory.module.scss';

interface ConversationHistoryProps {
  conversations: Conversation[];
}

const ConversationHistory: FC<ConversationHistoryProps> = ({
  conversations,
}) => {
  return (
    <Box className={classes.Container}>
      {conversations.map((conv) => (
        <Box key={v4()}>
          <OnlineUser
            user={conv.user}
            dot={false}
            message={conv.lastMessage?.text}
          />
        </Box>
      ))}
    </Box>
  );
};

export default ConversationHistory;
