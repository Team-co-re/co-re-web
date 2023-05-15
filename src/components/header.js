import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { loginModalTrue } from '../redux/slices/loginModalSlice';

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

const Header = () => {
    const arrDayStr = ['일','월','화','수','목','금','토'];

    const [date, setDate] = useState(
        `${new Date().getMonth()}월 ${new Date().getDate()}일 (${arrDayStr[new Date().getDay()]}) ${new Date().getHours()}:${new Date().getMinutes()}`
    );

    const nowDate = () => {
        const d = new Date();
        const month = d.getMonth();
        const date = d.getDate();
        const day = arrDayStr[d.getDay()];
        const hours = String(d.getHours()).padStart(2, '0');
        const minutes = String(d.getMinutes()).padStart(2, '0');
        setDate(`${month}월 ${date}일 (${day}) ${hours}:${minutes}`);
    };

    const startDate = () => {
        setInterval(nowDate, 1000);
    };

    startDate();


    const dispatch = useDispatch();
    return (
        <Container>
            <SubContainer>
                <LeftContent>
                    <TextBox>로고</TextBox>
                    <TextBox>홈</TextBox>
                    <TextBox><A onClick={() => dispatch(loginModalTrue())}>로그인</A></TextBox>
                    <TextBox>도움말</TextBox>
                </LeftContent>
                <RightContent>
                    <TextBox>{date}</TextBox>
                </RightContent>
            </SubContainer>
        </Container>
    );
};

export default Header;