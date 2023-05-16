import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    loginModalState: false,
    
}

export const loginModalSlice = createSlice({
    name: 'loginModal',
    initialState,
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
})

export const {loginModalTrue, loginModalFalse, loginModalStateChange} = loginModalSlice.actions;

export default loginModalSlice.reducer;