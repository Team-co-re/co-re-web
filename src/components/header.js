import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    background-color: #D9D9D9;
    width: 100%;
    height: 40px;
`;

const TextBox = styled.div`
    margin: 0px 20px;
`;

const SubContainer = styled.div`
    width: 100%;
    height: 40px;
    display: inline-flex;
    justify-content: space-between;
    align-items: center;
`;

const LeftContent = styled.div`
    display: inline-flex;
    align-items: center;

`;

const RightContent = styled.div`
    display: inline-flex;
    align-items: center;

`;

const A = styled.a`
    text-decoration: none;
    color: #000;
    cursor: pointer;
`;

const Header = ({ setLoginModal }) => {
    
    return (
        <Container>
            <SubContainer>
                <LeftContent>
                    <TextBox>로고</TextBox>
                    <TextBox>홈</TextBox>
                    <TextBox><A onClick={() => setLoginModal(true)}>로그인</A></TextBox>
                    <TextBox>도움말</TextBox>
                </LeftContent>
                <RightContent>
                    <TextBox>날짜</TextBox>
                </RightContent>
            </SubContainer>
        </Container>
    );
};

export default Header;