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
export const validateForm = () => (dispatch, getState) => {
  const {
    username,
    password,
    confirmPassword,
    skillLevel,
    jobRole,
    nickname,
  } = getState().sign;

  // 오류 메시지를 초기화
  dispatch(setErrorMessages({}));

  // 오류가 발생하면 해당 필드의 오류 메시지를 설정
  if (username.trim() === '') {
    dispatch(setErrorMessages({ username: '**아이디를 입력하세요.**' }));
  } else if (username.length < 4 || username.length > 20) {
    dispatch(
      setErrorMessages({
        username: '**아이디는 4자 이상 20자 이하로 입력해야 합니다.**',
      })
    );
  }

  if (password.trim() === '') {
    dispatch(setErrorMessages({ password: '**비밀번호를 입력하세요.**' }));
  } else if (password.length < 8) {
    dispatch(
      setErrorMessages({ password: '**비밀번호는 8자 이상이어야 합니다.**' })
    );
  }

  if (confirmPassword.trim() === '') {
    dispatch(
      setErrorMessages({ confirmPassword: '**비밀번호를 확인하세요.**' })
    );
  } else if (confirmPassword !== password) {
    dispatch(
      setErrorMessages({ confirmPassword: '**비밀번호를 다시 입력해주세요.**' })
    );
  }

  if (skillLevel === '') {
    dispatch(setErrorMessages({ skillLevel: '**개발 수준을 선택하세요.**' }));
  }

  if (jobRole === '') {
    dispatch(setErrorMessages({ jobRole: '**개발 직군을 선택하세요.**' }));
  }

  if (nickname.trim() === '') {
    dispatch(setErrorMessages({ nickname: '**닉네임을 입력하세요.**' }));
  }

  // 모든 필드에 유효성 검사를 통과한 경우 회원 가입 처리
  if (
    username.trim() !== '' &&
    password.trim() !== '' &&
    confirmPassword.trim() !== '' &&
    password === confirmPassword &&
    skillLevel !== '' &&
    jobRole !== '' &&
    nickname.trim() !== ''
  ) {
     try {
      dispatch(signup(getState().sign));
      console.log("회원 가입이 성공적으로 완료되었습니다.");
      alert("회원 가입이 성공적으로 완료되었습니다. 로그인을 해주세요.");
    } catch (error) {
      console.log("회원 가입 중 오류가 발생했습니다.", error);
    }
    // 회원 가입 처리를 수행하는 비동기 작업을 여기에 구현하자 ..
    // 예를 들어, API 호출이나 데이터베이스 저장 등을 수행할 수 있다 ..!
    // 회원 가입이 성공하면 초기화 또는 리다이렉트 등의 동작을 수행할 수 있다!!
  }
};

export default sign.reducer;