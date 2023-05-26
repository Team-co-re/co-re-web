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
  name: "sign",
  initialState: {
    username: "",
    password: "",
    confirmPassword: "",
    skillLevel: "",
    jobRole: "",
    nickname: "",
    loading: false,
    error: null,
    errorMessages: {}, // 오류 메시지를 저장할 객체
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
    setErrorMessages: (state, action) => {
      state.errorMessages = action.payload;
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
        state.username = "";
        state.password = "";
        state.confirmPassword = "";
        state.skillLevel = "";
        state.jobRole = "";
        state.nickname = "";
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
  setErrorMessages,
} = sign.actions;


// 유효성 검사 액션 크리에이터
export const validateForm = createAsyncThunk(
  "sign/validateForm",
  async (_, { dispatch, getState }) => {
    // 오류 메시지 초기화
    dispatch(setErrorMessages({}));

    const {
      username,
      password,
      confirmPassword,
      skillLevel,
      jobRole,
      nickname,
    } = getState().sign;

    if (username.trim() === "") {
      dispatch(
        setErrorMessages({
          username: "**아이디를 입력하세요.**",
        })
      );
      return;
    } else if (username.length < 4 || username.length > 20) {
      dispatch(
        setErrorMessages({
          username: "**아이디는 4자 이상 20자 이하로 입력해야 합니다.**",
        })
      );
      return;
    }

    if (password.trim() === "") {
      dispatch(
        setErrorMessages({
          password: "**비밀번호를 입력하세요.**",
        })
      );
      return;
    } else if (password.length < 8) {
      dispatch(
        setErrorMessages({
          password: "**비밀번호는 8자 이상이어야 합니다.**",
        })
      );
      return;
    }

    if (confirmPassword.trim() === "") {
      dispatch(
        setErrorMessages({
          confirmPassword: "**비밀번호를 확인하세요.**",
        })
      );
      return;
    } else if (confirmPassword !== password) {
      dispatch(
        setErrorMessages({
          confirmPassword: "**비밀번호를 다시 입력해주세요.**",
        })
      );
      return;
    }

    if (skillLevel === "") {
      dispatch(
        setErrorMessages({
          skillLevel: "**개발 수준을 선택하세요.**",
        })
      );
      return;
    }

    if (jobRole === "") {
      dispatch(
        setErrorMessages({
          jobRole: "**개발 직군을 선택하세요.**",
        })
      );
      return;
    }

    if (nickname.trim() === "") {
      dispatch(
        setErrorMessages({
          nickname: "**닉네임을 입력하세요.**",
        })
      );
      return;
    }

    // 모든 필드에 유효성 검사를 통과한 경우 회원 가입 처리
    if (
      username.trim() !== "" &&
      password.trim() !== "" &&
      confirmPassword.trim() !== "" &&
      password === confirmPassword &&
      skillLevel !== "" &&
      jobRole !== "" &&
      nickname.trim() !== ""
    ) {
      try {
        await dispatch(signup(getState().sign));
        console.log("회원 가입이 성성공적으로 완료되었습니다.");
        alert("회원 가입이 성공적으로 완료되었습니다. 로그인을 해주세요.");
      } catch (error) {
        console.log("회원 가입 중 오류가 발생했습니다.", error);
      }
    }
  }
);
export default sign.reducer;