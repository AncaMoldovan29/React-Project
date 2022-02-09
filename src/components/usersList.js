import React from "react";
import User from "./user";

const UsersList = (props) => {
  const { items } = props;
  return (
    <div>
      Users List
      {items.map((user) => (
        <User user={user} />
      ))}
      <div>----</div>
    </div>
  );
};
export default UsersList;
