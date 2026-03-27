import axios from "axios";
import React, { useEffect, useState } from "react";
import UserList from "./UserList";

const Dashboard2 = ({ getClickedPrduct }) => {
  console.log("clickProduct---->", getClickedPrduct);

  const [allUsers, setAllUsers] = useState([]);

  let fetchUsers = async () => {
    let res = await axios.get("https://fakestoreapi.com/users");
    setAllUsers(res.data);
    // console.log(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  let handleUserDelete = (user_id) => {
    let filterUsers = allUsers.filter((elem) => elem.id !== user_id);
    setAllUsers(filterUsers);
  };

  return (
    <div>
      <h1>Users Home</h1>

      <div>
        {allUsers.map((elem) => {
          return (
            <UserList
              key={elem.id}
              handleUserDelete={handleUserDelete}
              allUsers={elem}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Dashboard2;
