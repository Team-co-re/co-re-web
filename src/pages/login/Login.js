import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import styled, { keyframes } from "styled-components";
import { setUsername, setPassword } from '../../redux/slices/loginSlice';
import LoginButtons from './LoginButtons';


const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 600px;
  overflow-y: scroll;
  align-items: right;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 8px;
  }
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb:hover {
    background-color: rgba(0, 0, 0, 0.4);
  }
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
    const {
      username, password 
    } = useSelector((state) => state.login);

    const handleUsernameChange = (event) => {
        dispatch(setUsername(event.target.value));
      };
    
      const handlePasswordChange = (event) => {
        dispatch(setPassword(event.target.value));
      };

    return (
        <div>
          <MessageContainer>
              <LoginForm>아이디를 입력하세요</LoginForm>
              <IdForm>
                <input
                  type="text"
                  placeholder="아이디를 입력하세요"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </IdForm>
              <PasswordForm>비밀번호를 입력하세요</PasswordForm>
              <PassForm>
                <input
                  type="password"
                  placeholder="비밀번호를 입력하세요"
                  value={password}
                  onChange={handlePasswordChange}
                />
              </PassForm>
            </MessageContainer>
        </div>
      );
}

export default Login;
