import React from "react";
import { useState } from "react";
import UsersList from "./UsersList";

const Operations = ({ users, search, onChange, setSearch }) => {
  return (
    <div>
      <input type="text" placeholder="Search..." onChange={onChange}></input>
    </div>
  );
};

export default Operations;
