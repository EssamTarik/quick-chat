import React from 'react';
import { MessageList } from '../../components';

const MessageListContainer = ({ messages, activeUser: { id: activeUserId } }) => (
  <MessageList messages={messages[activeUserId] || []} />
)

export default MessageListContainer;