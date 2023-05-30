import React, {useState} from "react";
import styled, { keyframes } from "styled-components";
import SocialLogin from "./SocialLogin";
import { useSelector, useDispatch } from 'react-redux';
import { setIsSignupFormVisible } from '../../redux/slices/signSlice';




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

const LoginButtons= () => {
  const dispatch = useDispatch();
  const isSignupFormVisible = useSelector((state) => state.sign.isSignupFormVisible);
  const [isLoginFormVisible, setIsLoginFormVisible] = useState(false)
  const [ setIsInputVisible] = useState(true);
  const [isSocialLoginVisible, setIsSocialLoginVisible] = useState(false);

  const handleLoginClick = () => {
    setIsLoginFormVisible(true);
    dispatch(setIsLoginFormVisible(false));
    setIsSocialLoginVisible(false);
  };

  const handleSignupClick = () => {
    setIsSignupFormVisible(true);
    setIsLoginFormVisible(false);
    setIsInputVisible(false);
    setIsSocialLoginVisible(false);
  };

  const handleSocialLoginClick = () => {
    setIsSocialLoginVisible(true);
    setIsLoginFormVisible(false);
    setIsSignupFormVisible(false);
  };
  return(
      <div>
          <LoginButtonChat>
              <LoginButton>
              <button onClick={handleLoginClick}>로그인</button> <br />
              <button onClick={handleSocialLoginClick}>소셜 로그인</button><br />
              {isSocialLoginVisible && <SocialLogin />}
              <button onClick={handleSignupClick}>회원가입</button>
              </LoginButton>
          </LoginButtonChat>

      </div>
  )
}

export default LoginButtons;

