import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import Login from '../login/loginPage';
import Menu from '../../components/dock';
import { useSelector } from 'react-redux';
import Comment from '../comment/commentPage';

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Main = () => {
    const loginModal = useSelector((state) => state.loginModal.loginModalState);
    const commentModal = useSelector((state) => state.commentModal.commentModalState);

    return (
        <MainContainer>
            <Header />
            <Menu />
            {loginModal ?
                <Login />
                : null}
            {commentModal ?
                <Comment />
                : null}
        </MainContainer>
    );
};

export default Main;