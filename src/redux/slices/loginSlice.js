import { createSlice } from '@reduxjs/toolkit';

const loginSlice = createSlice({
  name: 'login',
  initialState: {
    messages: [],
    username: '',
    password: '',
    isPasswordVisible: false,
  },
  reducers: {
    setMessages: (state, action) => {
      state.messages.push(action.payload);
    },
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setPasswordVisible: (state, action) => {
      state.isPasswordVisible = action.payload;
    },
    resetLogin: (state) => {
      state.username = '';
      state.password = '';
      state.isPasswordVisible = false;
    },
  },
});

export const {
  setMessages,
  setUsername,
  setPassword,
  setPasswordVisible,
  resetLogin,
} = loginSlice.actions;

export default loginSlice.reducer;