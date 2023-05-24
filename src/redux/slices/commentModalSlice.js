import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    commentModalState: false,
    
};

export const commentModalSlice = createSlice({
    name: 'commentModal',
    initialState,
    reducers: {
        commentModalTrue: (state) => {
            state.commentModalState = true
        },
        
        commentModalFalse: (state) => {
            state.commentModalState = false
        },

        commentModalStateChange: (state) => {
            state.commentModalState = !state.commentModalState
        },
    },
});

export const {commentModalTrue, commentModalFalse, commentModalStateChange} = commentModalSlice.actions;

export default commentModalSlice.reducer;