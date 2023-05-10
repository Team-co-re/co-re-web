import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../../components/header';
import Login from '../login/loginPage';
import Menu from '../../components/dock';

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Main = () => {
    const [loginModal, setLoginModal] = useState(false);

    return (
        <MainContainer>
            <Header setLoginModal={setLoginModal} />
            <Menu />
            {loginModal ?
                <Login setLoginModal={setLoginModal} />
                : null}
        </MainContainer>
    );
};

export default Main;