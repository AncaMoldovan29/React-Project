import React from 'react';
import {Table} from 'react-bootstrap';
import {UsersContext} from './utils/usersContext';

const UsersListChild = () => {
    return (
        <UsersContext.Consumer>
            {({users}) => (
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
                        .map((user, key) => (
                            <tr>
                                <td>{user.id}</td>
                                <td>{user.nume}</td>
                                <td>{user.prenume}</td>
                                <td>{user.email}</td>
                                <td>{user.varsta}</td>
                                <td>{user.adresa}</td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            )
            }
        </UsersContext.Consumer>
    )
};

export default UsersListChild;
