import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 40px;
`;

const SubContainer = styled.div`
    display: inline-flex;
`;

const LeftContent = styled.div`
    display: inline-flex;
`;

const RightContent = styled.div`
    display: inline-flex;
`;

const Header = () => {
    return (
        <Container>
            <SubContainer>
                <LeftContent>
                    <div>로고</div>
                    <div>Home</div>
                    <div>로그인</div>
                    <div>도움말</div>
                </LeftContent>
                <RightContent>
                    <div>날짜</div>
                </RightContent>
            </SubContainer>
        </Container>
    );
};

export default Header;