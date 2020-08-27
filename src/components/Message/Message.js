import React from 'react';
import './styles.css';
import { formatDateTime } from '../../utils';

const Message = ({ message, date }) => {
  return (
    <div className='message'>
      <div>{message}</div>
      <div className='message__date'>{formatDateTime(date)}</div>
    </div>
  )
}

export default Message;