import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        messages: [],
        text: '',
    },
    reducers: {
        setCommentText: (state, action) => {
            state.text = action.payload;
        },
    },
});

export const {
    setCommentText,
} = commentSlice.actions;

export default commentSlice.reducer;