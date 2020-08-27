import React, { useCallback } from 'react';
import './styles.css';

const NewMessage = ({ onSubmit, onChange, message }) => {

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    onSubmit();
  }, [onSubmit]);

  const handleChange = useCallback(({ target: { value } }) => {
    onChange(value);
  }, [onChange])

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={handleChange} className='new-message' value={message} />
    </form >
  );
}
export default NewMessage;
