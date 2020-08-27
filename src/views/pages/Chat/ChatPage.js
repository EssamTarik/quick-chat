import React from 'react';
import { UserListContainer, MessageListContainer, NewMessageContainer } from '../../../containers';
import './styles.css';

const ChatPage = () => (
  <div className='chat-page'>
    <UserListContainer />
    <div className='chat-page__messages-section'>
      <div className='chat-page__messages-section__message-list-container'>
        <MessageListContainer />
      </div>
      <NewMessageContainer />
    </div>
  </div>
)

export default ChatPage;