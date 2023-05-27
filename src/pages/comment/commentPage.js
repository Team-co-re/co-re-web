import React from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { commentModalFalse } from '../../redux/slices/commentModalSlice';
import { returnBaseProcess } from '../../redux/slices/headerProcessSlice';
import sendImg from '../../assets/imgs/send.png';
import { setCommentText } from '../../redux/slices/commentSlice';

const CommentPageContainer = styled.div`
    width: 800px;
    height: 600px;
    z-index: 999;

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    background-color: rgba(183, 183, 183, 0.55);
    border: 1px solid black;
    border-radius: 8px 8px 0px 0px;
    border: none;
`;

const SubContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`;

const CloseBtn = styled.button`
    margin: 5px;
`;

const ChatDiv = styled.div`
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 32px;
`;

const ChatSubDiv = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
`;

const ChatInput = styled.textarea`
    height: calc(100% - 4px);
    width: calc(100% - 36px);
    border: none;
    outline: none;
    font-size: 16px;
    padding: 2px;
    resize: none;
`;

const SendBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    background-color: red;
    :hover {
        cursor: pointer;
        background-color: blue;
    };
`;

const SendImgDiv = styled.div`
    background-image: url(${sendImg});
    background-size: 100%;
    width: 28px;
    height: 28px;
`;

const Comment = () => {
    const dispatch = useDispatch();

    const closeClickHandler = () => {
        dispatch(commentModalFalse());
        dispatch(returnBaseProcess());
    };

    const pressEnterHandler = (e) => {
        if (e.key === 'Enter') {
            if(!e.shiftKey) {
                e.preventDefault();
                console.log('Enter key pressed without Shift key');
            };
        };
    };

    return (
        <CommentPageContainer>
            <SubContainer>
                <CloseBtn onClick={closeClickHandler}>X</CloseBtn>
                <ChatDiv>
                    <ChatSubDiv>
                        <ChatInput onChange={(e) => dispatch(setCommentText(e.target.value))} onKeyDown={pressEnterHandler} />
                        <SendBtn>
                            <SendImgDiv />
                        </SendBtn>
                    </ChatSubDiv>
                </ChatDiv>
            </SubContainer>
        </CommentPageContainer>
    );
};

export default Comment;