import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    processText: '홈'
};

export const headerProcessSlice = createSlice({
    name: 'process',
    initialState,
    reducers: {
        returnBaseProcess: (state) => {
            state.processText = '홈'
        },
        changeProcess: (state, action) => {
            state.processText = action.payload
        }
    }
});

export const { returnBaseProcess, changeProcess } = headerProcessSlice.actions;

export default headerProcessSlice.reducer;