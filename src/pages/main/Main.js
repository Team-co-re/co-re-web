import React from 'react';
import styled from 'styled-components';
import Header from '../../components/Header';

const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
`;

const Main = () => {
    return (
        <MainContainer>
            <Header />
        </MainContainer>
    );
};

export default Main;