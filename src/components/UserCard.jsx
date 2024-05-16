import React from 'react';

const UserCard = ({ user }) => {
  const imageUrl = `https://picsum.photos/200/300?id=${user.id}`;
  return (
    <div className="user-card">
     <img src={imageUrl} alt="users"/>
      <div className="user-info">
        <h3>{user.name}</h3>
        <p> {user.username}</p>
        <p> {user.email}</p>
      </div>
    </div>
  );
};

export default UserCard;