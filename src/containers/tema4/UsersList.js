import React from "react";
import { Table } from "react-bootstrap";
import { useState } from "react";

const UsersList = (props) => {
  const { users, onaddUsers, search } = props;

  return (
    <div>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nume</th>
            <th>Prenume</th>
            <th>Email</th>
            <th>Varsta</th>
            <th>Adresa</th>
          </tr>
        </thead>
        <tbody>
          {users
            .filter((users) => {
              if (search == "") {
                return users;
              } else if (
                users.nume.toLowerCase().includes(search.toLowerCase()) ||
                users.prenume.toLowerCase().includes(search.toLowerCase()) ||
                users.id.toLowerCase().includes(search.toLowerCase())
              ) {
                return users;
              }
            })
            .map((users, key) => {
              return (
                <tr users={users} onaddUsers={onaddUsers} key={key}>
                  <td>{users.id}</td>

                  <td>{users.nume}</td>
                  <td>{users.prenume}</td>
                  <td>{users.email}</td>
                  <td>{users.varsta}</td>
                  <td>{users.adresa}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersList;
