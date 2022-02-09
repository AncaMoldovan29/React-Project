// internal functions

// const filterRow = (user, searchValueParam) => {
//     return user.nume.includes(searchValueParam) ||
//         user.prenume.includes(searchValueParam) ||
//         user.email.includes(searchValueParam) ||
//         user.varsta.includes(searchValueParam) ||
//         user.adresa.includes(searchValueParam);
// };

const filterRow = (user, searchValueParam) => (
    Boolean(Object.keys(user).find(item => user[item].includes(searchValueParam)))
);

///


export const filterData = (initialUsersData, searchValue) => {
    return initialUsersData.filter(item => filterRow(item, searchValue));
};

