import * as React from 'react';

export const UsersContext = React.createContext({
    users: [],
    setUsers: () => (false),
});
