import React, { useRef, useEffect } from 'react';
import './styles.css';
import Message from '../Message';

const MessageList = ({ messages = [] }) => {
  const chatEndRef = useRef();

  useEffect(() => {
    if (chatEndRef && chatEndRef.current) {
      chatEndRef.current.scrollIntoView();
    }
  }, [chatEndRef, messages.length]);

  return (
    <div className='message-list'>
      {messages.map((message, i) => (
        <div key={i} className='message-list__message'>
          <Message {...message} />
        </div>
      ))}
      <div ref={chatEndRef}></div>
    </div>
  );
}

export default MessageList;