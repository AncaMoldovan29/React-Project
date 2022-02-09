import React from "react";
import UserForm from "./UserForm";
import UsersList from "./UsersList";
import { useState } from "react";
import Operations from "./Operations";
import "./form.css";

const UsersContainer = () => {
  const [search, setSearch] = useState("");
  const [users, setUsers] = useState([
    {
      id: "1",
      nume: "Ungur",
      prenume: "Andrei",
      email: "andrei@gmail.com",
      varsta: "27",
      adresa: "Calea Baciului nr.5",
    },
    {
      id: "2",
      nume: "Moldovan",
      prenume: "Anca",
      email: "anca@gmail.com",
      varsta: "27",
      adresa: "str.Iugoslaviei nr.72",
    },
    {
      id: "3",
      nume: "Negrea",
      prenume: "Marian",
      email: "marian@gmail.com",
      varsta: "28",
      adresa: "str.Vasile Lupu nr.3",
    },
    {
      id: "4",
      nume: "Pop",
      prenume: "Alexandra",
      email: "alexandra@gmail.com",
      varsta: "29",
      adresa: "str.Emil Racovita nr.13",
    },
    {
      id: "5",
      nume: "Ilea",
      prenume: "Dan",
      email: "dan@gmail.com",
      varsta: "30",
      adresa: "str.Donath nr.45",
    },
    {
      id: "6",
      nume: "Marian",
      prenume: "Diana",
      email: "diana@gmail.com",
      varsta: "25",
      adresa: "str.Take Ionescu nr.4",
    },
    {
      id: "7",
      nume: "Dezmirean",
      prenume: "Iulia",
      email: "iulia@gmail.com",
      varsta: "26",
      adresa: "str.Aurel Ghiurghianu nr.72",
    },
    {
      id: "8",
      nume: "Voicu",
      prenume: "Dan",
      email: "vdan@gmail.com",
      varsta: "35",
      adresa: "str.Calea Manastur nr.172",
    },
    {
      id: "9",
      nume: "Socol",
      prenume: "Paul",
      email: "pauls@gmail.com",
      varsta: "35",
      adresa: "str.Albinii nr.18",
    },
    {
      id: "10",
      nume: "Jucan",
      prenume: "Irina",
      email: "irina@gmail.com",
      varsta: "27",
      adresa: "str.Titulescu nr.8",
    },
  ]);

  const addUser = (user) => {
    const id = Math.floor(Math.random() * 100) + 1;
    const newUser = { id, ...user };
    setUsers([...users, newUser]);
  };
  const onChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div>
      Users Container
      <div>
        <UsersList users={users} onaddUser={addUser} search={search} />
      </div>
      <div className={"users"}>
        <UserForm onAdd={addUser} />

        <Operations onChange={onChange} />
      </div>
    </div>
  );
};

export default UsersContainer;
