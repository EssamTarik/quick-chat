import React, { useState, useCallback, useEffect } from 'react';
import { NewMessage } from '../../components';

const NewMessageContainer = ({ sendMessage, activeUser }) => {
  const [message, setMessage] = useState('');

  const handleSubmit = useCallback(() => {
    sendMessage(message, activeUser);
    setMessage('');
  }, [sendMessage, message, activeUser])

  useEffect(() => {
    setMessage('');
  }, [activeUser, setMessage]);

  return (
    <NewMessage message={message} onChange={setMessage} onSubmit={handleSubmit} />
  )
}

export default NewMessageContainer;