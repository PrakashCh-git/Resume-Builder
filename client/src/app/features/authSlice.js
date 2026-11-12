
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: "auth",

    initialState: {
        user: null,
        isAuthenticated: false,
        loading: true,
    },

    reducers: {
        login: (state, action) => {
            state.user = action.payload.user;
            state.isAuthenticated = true;
        },

        logout: (state) => {
            state.user = null;
            state.isAuthenticated = false;
        },

        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { login, logout, setLoading } = authSlice.actions;

export default authSlice.reducer;
