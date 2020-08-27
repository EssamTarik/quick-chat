import React from 'react';
import { UserList } from '../../components';

const UserListContainer = ({ setActiveUser, users, activeUser }) => (
  <UserList users={users} activeUser={activeUser} onUserClick={setActiveUser} />
)

export default UserListContainer;