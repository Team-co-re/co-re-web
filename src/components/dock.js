import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    position: absolute;
    top: 85%;
    left: 50%;
    transform: translate( -50%, -50%);
    width: 80%;
    height: 100px;
    background-color: rgba(255 , 255, 255, 0.4);
    border-radius: 8px;
`;

const SubContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 100%;
`;

const Icon = styled.div`
    margin: 16px;
    width: 64px;
    height: 64px;
    background-color: black;
`;

const Menu = () => {
    return (
        <Container>
            <SubContainer>
                <Icon />
                <Icon />
                <Icon />
                <Icon />
            </SubContainer>
        </Container>
    );
};

export default Menu;