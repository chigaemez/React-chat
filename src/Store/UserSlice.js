import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';














const userSlice = createSlice({
    name: 'auth',
    initialState: {
        user: JSON.parse(localStorage.getItem('user')) || null,
        loading: false,
        error: null,
        success: null,
        Status: "idle",
        saveError: null,
        savedNews: [],
        userImage: "",
        fetchStatus: "idle",
        fetchError: null,
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
    },
    reducers: {

    },



    extraReducers: (builder) => {
        builder
    },
});
export const { } = userSlice.actions;
export default userSlice.reducer;