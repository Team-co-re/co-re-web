import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  messages: [],
  inputValue: "",
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action) => {
      state.messages.push(action.payload);
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
  },
});

export const { addMessage, setInputValue } = chatSlice.actions;
export default chatSlice.reducer
