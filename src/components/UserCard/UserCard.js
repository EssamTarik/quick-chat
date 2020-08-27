import React from 'react';
import cn from 'classnames'
import profileImg from '../../assets/img/profile.png';
import './styles.css';

const UserCard = ({ user: { name }, onClick, active }) => (
  <button onClick={onClick} className={cn('user-card', { 'user-card--active': active })}>
    <img alt={name} className='user-card__avatar' src={profileImg} />
    <div className='user-card__name'>{name}</div>
  </button>
)

export default UserCard;