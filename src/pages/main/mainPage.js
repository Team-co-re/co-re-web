import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import Login from '../login/loginPage';
import Menu from '../../components/dock';
import { useDispatch, useSelector } from 'react-redux';

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Main = () => {
    const loginModal = useSelector((state) => state.loginModal.loginModalState);

    return (
        <MainContainer>
            <Header />
            <Menu />
            {loginModal ?
                <Login />
                : null}
        </MainContainer>
    );
};

export default Main;