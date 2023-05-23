import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const signup = createAsyncThunk('sign/signup', async (formData) => {
  try {
    // 서버에 폼 데이터 전송하기
    const response = await axios({
      method: 'post',
      url: '/api/signup',
      data: formData
    });
    // 서버 응답 처리하기
    return response.data;
  } catch (error) {
    // 오류 처리하기
    throw error.response.data;
  }
});

const sign = createSlice({
  name: 'sign',
  initialState: {
    username: '',
    password: '',
    confirmPassword: '',
    skillLevel: '',
    jobRole: '',
    nickname: '',
    loading: false,
    error: null,
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
  extraReducers: (builder) => {
    builder
      .addCase(signup.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(signup.fulfilled, (state) => {
        state.loading = false;
        // 성공적으로 회원 가입이 완료된 경우 초기화 또는 리다이렉트 등의 동작 수행해줌
        state.username = '';
        state.password = '';
        state.confirmPassword = '';
        state.skillLevel = '';
        state.jobRole = '';
        state.nickname = '';
      })
      .addCase(signup.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const {
  setUsername,
  setPassword,
  setConfirmPassword,
  setSkillLevel,
  setJobRole,
  setNickname,
} = sign.actions;

export default sign.reducer;