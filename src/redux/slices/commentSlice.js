import { createSlice } from '@reduxjs/toolkit';

const commentSlice = createSlice({
    name: 'comment',
    initialState: {
        sendMessages: [],
        text: '',
    },
    reducers: {
        setCommentText: (state, action) => {
            state.text = action.payload;
        },
        setSendMessages: (state, action) => {
            state.sendMessages.push(action.payload);
        },
    },
});

export const {
    setCommentText,
    setSendMessages,
} = commentSlice.actions;

export default commentSlice.reducer;