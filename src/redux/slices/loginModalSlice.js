import { createSlice } from "@reduxjs/toolkit"

export const loginModalSlice = createSlice({
    name: 'loginModal',
    initialState: {
        loginModalState: false,
    },
    reducers: {
        loginModalTrue: (state) => {
            state.loginModalState = true
        },
        
        loginModalFalse: (state) => {
            state.loginModalState = false
        },

        loginModalStateChange: (state) => {
            state.loginModalState = !state.loginModalState
        },
    },
});

export const {loginModalTrue, loginModalFalse, loginModalStateChange} = loginModalSlice.actions;

export default loginModalSlice.reducer;