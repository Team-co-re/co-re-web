import React from 'react';
import styled from 'styled-components';
import Header from '../../components/header/Header';
import Menu from '../../components/menu/Menu';

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Main = () => {
    return (
        <MainContainer>
            <Header />
            <Menu />
        </MainContainer>
    );
};

export default Main;