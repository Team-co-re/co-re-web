import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { commentModalFalse } from '../../redux/slices/commentModalSlice';
import { returnBaseProcess } from '../../redux/slices/headerProcessSlice';

const CommentPageContainer = styled.div`
    width: 600px;
    height: 390px;
    z-index: 999;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: rgba(183, 183, 183, 0.55);
    border: 1px solid black;
    border-radius: 8px;
    border: none;
`;

const Comment = () => {
    const dispatch = useDispatch();

    const closeClickHandler = () => {
        dispatch(commentModalFalse());
        dispatch(returnBaseProcess());
    };

    return (
        <CommentPageContainer>
            <button onClick={closeClickHandler}>X</button>
        </CommentPageContainer>
    );
};

export default Comment;