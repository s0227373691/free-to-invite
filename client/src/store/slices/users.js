import { createSlice } from '@reduxjs/toolkit';

const slice = createSlice({
    name: 'users',
    initialState: {
        loggedIn: false,
    },
});

export default slice.reducer;
