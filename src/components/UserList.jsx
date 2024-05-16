import React from 'react';
import UserCard from './UserCard'; // Ajusta la ruta de importación según tu estructura de archivos

const UserList = ({ users }) => {
  return (
    <div className="user-list">
      {users.map(user => (
        <UserCard key={user.id} user={user} />
      ))}
    </div>
  );
};

export default UserList;