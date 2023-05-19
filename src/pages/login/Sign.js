import React from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from "react-redux";
import { setMessages, setUsername, setPassword, setPasswordVisible, resetLogin } from '../../redux/slices/loginSlice';

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

const SignIdForm = styled.div`
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
const SignPasswordForm = styled.div`
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


const Sign = () => {
    const dispatch = useDispatch();
    const { messages, username, password, isPasswordVisible } = useSelector(
        (state) => state.login
    );

    const handleUsernameChange = (event) => {
        dispatch(setUsername(event.target.value));  };
    
      const handlePasswordChange = (event) => {
        dispatch(setPassword(event.target.value));  };

    return (
        <MessageContainer>
            <SignIdForm> 사용할 아이디를 입력하세요. </SignIdForm>
            <IdForm>
                <input
                  type="text"
                  placeholder="아이디를 입력하세요"
                  value={username}
                  onChange={handleUsernameChange}
                />
              </IdForm>
              <SignPasswordForm>사용할 비밀번호를 입력하세요.</SignPasswordForm>
                  <PassForm>
                    <input
                      type="password"
                      placeholder="비밀번호를 입력하세요"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </PassForm>
        </MessageContainer>
    );
};

export default Sign;