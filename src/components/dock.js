import React, { useState } from 'react';
import styled from 'styled-components';
import Icon from './icon';
import { useDispatch } from 'react-redux';
import { commentModalTrue } from '../redux/slices/commentModalSlice';

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

const Menu = () => {
    const dispatch = useDispatch();

    const commentClickHandler = () => {
        dispatch(commentModalTrue());
    };

    return (
        <Container>
            <SubContainer>
                <Icon text="주석처리" onClick={commentClickHandler}/>
                <Icon text="기능2"/>
                <Icon text="기능3"/>
                <Icon text="기능4"/>
            </SubContainer>
        </Container>
    );
};

export default Menu;