import React, { useEffect, useState } from "react";
import axios from "axios";
import SingleUser from "./SingleUser";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    const response = await axios.get("https://randomuser.me/api/?results=5");
    setUsers(response.data.results);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <ul>
        {users.map((user, idx) => {
          return (
            <li>
              <SingleUser user={user} key={idx} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UserList;
