import React from 'react';
import styled from 'styled-components';
import HeaderFont from './HeaderFont';

const Container = styled.div`
    background-color: #D9D9D9;
    width: 100%;
    height: 40px;
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

const Header = () => {
    return (
        <Container>
            <SubContainer>
                <LeftContent>
                    <HeaderFont text="로고" />
                    <HeaderFont text="Home" />
                    <HeaderFont text="로그인" />
                    <HeaderFont text="도움말" />
                </LeftContent>
                <RightContent>
                    <HeaderFont text="날짜" />
                </RightContent>
            </SubContainer>
        </Container>
    );
};

export default Header;