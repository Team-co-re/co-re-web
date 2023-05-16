import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled, { keyframes } from "styled-components";
import { loginModalFalse } from "../../redux/slices/loginModalSlice";
import { returnBaseProcess } from "../../redux/slices/headerProcessSlice";


const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
`;

const LoginContainer = styled.div`
    width: 600px;
    height: 390px;
    z-index: 999;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: rgba(183, 183, 183, 0.55);
    border: 1px solid black;
    border-radius: 8px;
    border: none;

`;

const CloseBtn = styled.button`
  border: none;
  background-color: rgba(111, 111, 111, 0.1);
  position: relative;
  left: 580px;
  top: none;
  border-radius: 20px;
`;

const LoginButtonChat = styled.div`
  background-color: #f3e77f;
  position: absolute;
  left: 20px;
  width: 260px;
  justify-content: left;
  margin-bottom: 8px;
  padding: 8px;
  border-radius: 20px;
  text-align: center;

`;

const LoginButton = styled.div`
  button {
    margin-top: 3px;
    margin-bottom: 3px;
    cursor: pointer;
  }
`;


const ChatContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 351.2px;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
`;

const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 600px;
  overflow-y: scroll;
  align-items: right;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`;

const InputContainer = styled.div`
  background-color: white;
  display: flex;
  width: 600px;
  position: relative;
  top: 2px;
`;

const Input = styled.input`
  flex: 1;
  border-radius: 4px;
  border: none;
  padding: 8px;
  outline: none;
`;

const Button = styled.button`
  border-radius: 1px;
  border: none;
  padding: 8px;
  background-color: #fff065;
  color: #000000;
`;

const LoginForm = styled.div`
  position: absolute;
  top: 160px;
  left: 20px;
  border-radius: 10px;
  border: none;
  padding: 8px;
  background-color: #fff065;
  color: #000000;
`;

const IdForm = styled.div`
  background-color: rgba(255, 242, 172, 0.7);
  width: 260px;
  margin-bottom: 8px;
  margin-left: 280px;
  padding: 8px;
  border-radius: 20px;
  text-align: center;
  position: absolute;
  top: 200px;
  input {
    background-color: transparent;
    border: none;
    outline: none;
    text-align: center;
  }
`;
const PasswordForm = styled.div`
  position: absolute;
  top: 250px;
  left: 20px;
  border-radius: 10px;
  border: none;
  padding: 8px;
  background-color: #fff065;
  color: #000000;
`;
const PassForm = styled.div`
  background-color: rgba(255, 242, 172, 0.7);
  width: 260px;
  margin-bottom: 8px;
  margin-left: 280px;
  padding: 8px;
  border-radius: 20px;
  text-align: center;
  position: absolute;
  top: 290px;
  input {
    background-color: transparent;
    border: none;
    outline: none;
    text-align: center;
  }
`;


const Login = () => {
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const closeOnClickHandler = () => {
    dispatch(loginModalFalse());
    dispatch(returnBaseProcess());
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = () => {
    if (inputValue) {
      setMessages([...messages, inputValue]);
      setInputValue("");
    }
  };

  return (
    <LoginContainer>
      <CloseBtn onClick={closeOnClickHandler}>X</CloseBtn>
      <ChatContainer>
        <LoginButtonChat>
          <LoginButton>
            <button>로그인</button> <br />
            <button>소셜 로그인</button> <br />
            <button>회원가입</button>
          </LoginButton>
        </LoginButtonChat>
        <MessageContainer>
          <LoginForm>아이디를 입력하세요</LoginForm>
          <IdForm>
            <input
              type="text"
              placeholder="아이디를 입력하세요"
            />
          </IdForm>
          <PasswordForm>비밀번호를 입력하세요</PasswordForm>
          <PassForm>
            <input
              type="password"
              placeholder="비밀번호를 입력하세요"
            />
          </PassForm>
        </MessageContainer>
        <InputContainer>
          <Input value={inputValue} onChange={handleInputChange} />
          <Button onClick={handleButtonClick}> 전송 </Button>
        </InputContainer>
      </ChatContainer>
    </LoginContainer>
  );
};

export default Login;
