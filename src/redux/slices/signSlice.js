import { createSlice } from '@reduxjs/toolkit';

const signSlice = createSlice({
  name: 'sign',
  initialState: {
    username: '',
    password: '',
    confirmPassword: '',
    skillLevel: '',
    jobRole: '',
    nickname: '',
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setConfirmPassword: (state, action) => {
      state.confirmPassword = action.payload;
    },
    setSkillLevel: (state, action) => {
      state.skillLevel = action.payload;
    },
    setJobRole: (state, action) => {
      state.jobRole = action.payload;
    },
    setNickname: (state, action) => {
      state.nickname = action.payload;
    },
  },
});

export const {
  setUsername,
  setPassword,
  setConfirmPassword,
  setSkillLevel,
  setJobRole,
  setNickname,
} = signSlice.actions;

export default signSlice.reducer;