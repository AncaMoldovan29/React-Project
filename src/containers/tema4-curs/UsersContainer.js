import React, {useState, useEffect} from 'react';
import UserForm from './UserForm';
import Operations from './Operations';
import UsersList from './UsersList';
import {users as initialUsers} from './utils/constants';
import {filterData} from './utils/utils';
import {UsersContext} from './utils/usersContext';

const UsersContainer = () => {
    const [users, setUsers] = useState(initialUsers);
    const [searchValue, setSearchValue] = useState('');

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
    };
    useEffect(() => {
        setUsers(filterData(initialUsers, searchValue));
    }, [searchValue]);


    console.log('users', users);
    return (
        <div>
            Users Container
            <UsersContext.Provider value={{users}}>
                <UserForm onSubmit={addUser}/>
                <Operations searchValue={searchValue} setSearchValue={setSearchValue}/>
                <UsersList/>
            </UsersContext.Provider>
        </div>
    )
};

export default UsersContainer;
