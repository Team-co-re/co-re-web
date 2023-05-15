import React from 'react';
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { loginModalFalse } from '../../redux/slices/loginModalSlice';

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
    width: 300px;
    height: 200px;
    z-index: 999;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: gray;
    border: 1px solid black;
    border-radius: 8px;
`;

const CloseBtn = styled.button`

`;

const Login = () => {
    const dispatch = useDispatch();

    return (
        <LoginContainer>
            <CloseBtn onClick={() => dispatch(loginModalFalse()) }>X</CloseBtn>
            <p>로그인 창</p>
        </LoginContainer>
    );
};

export default Login;