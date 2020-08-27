import React from 'react';
import UserCard from '../UserCard';

const UserList = ({ users, activeUser: { id: activeUserId }, onUserClick }) => (
  <div className='user-list'>
    {
      users.map((user) => {
        const { id: userId } = user;
        return (
          <UserCard
            key={userId}
            active={activeUserId === userId}
            user={user}
            onClick={() => onUserClick(user)}
          />
        );
      })
    }
  </div>
)

export default UserList;