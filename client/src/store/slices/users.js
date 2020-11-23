import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'users',
    initialState: {
        loggedIn: false,
    },
    reducers: {
        userCheckedLoginStatus: (users, action) => {
            let newUsers = { ...users };
            newUsers.loggedIn = action.payload;
            return newUsers;
        },
    },
});

export default slice.reducer;
export const { userCheckedLoginStatus } = slice.actions;
