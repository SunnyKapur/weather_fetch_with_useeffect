import React from "react";

const UserList = ({ allUsers, handleUserDelete }) => {
  return (
    <div>
      <h1>{allUsers.name.firstname}</h1>
      <button onClick={() => handleUserDelete(allUsers.id)}>Delete</button>
    </div>
  );
};

export default UserList;
