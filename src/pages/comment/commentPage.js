import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { commentModalFalse } from '../../redux/slices/commentModalSlice';
import { returnBaseProcess } from '../../redux/slices/headerProcessSlice';
import sendImg from '../../assets/imgs/send.png';
import { setCommentText, setSendMessages } from '../../redux/slices/commentSlice';
import TextBox from '../../components/textbox';
import axios from 'axios';
import { API } from '../../config';

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

const SendBtn = styled.input`
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-image: url(${sendImg});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 85%;
    width: 32px;
    height: 32px;
    background-color: ${(props) => props.bgColor === "" ? '#D3D3D3' : '#fef01b'};
`;

const ChatContainer = styled.div`
    position: relative;
    overflow: scroll;
    width: 100%;
    height: 500px;
    //여기 밑에 부분은 스크롤 투명하게 함 ( 영상찍을려면 이게 더 이쁜것 같아서 !! )
    overflow-y: scroll;
    align-items: right;
    overflow: auto;
    ::-webkit-scrollbar {
        width: 8px;
    }
    ::-webkit-scrollbar-track {
        background-color: transparent;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: rgba(0, 0, 0, 0.4);
    }
`;

const Send = styled.div`
    padding: 4px;
`;

const DateContainer = styled.div`
    font-size: 8px;
    color: '#D3D3D3';
    text-align: ${(props) => props.sendState ? 'right' : 'left'};
`;

const Comment = () => {
    const dispatch = useDispatch();
    const sendTextList = useSelector((state) => state.comment.sendMessages);
    const commentText = useSelector((state) => state.comment.text);
    const resTextList = '# "Hello World"를 출력합니다\n print(\'Hello World\')';

    const closeClickHandler = () => {
        dispatch(commentModalFalse());
        dispatch(returnBaseProcess());
    };

    const pressEnterHandler = (e) => {
        if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
            if (!e.shiftKey) {
                e.preventDefault();
                dispatch(setSendMessages({
                    text: e.target.value,
                    date: new Date().toLocaleString(),
                    isSend: true
                }));
                // 응답 메시지 세팅
                axios.post(`${API.GPT_QUESTION}`, {
                    question: commentText
                }).then((res) => dispatch(setSendMessages({
                    text: res.data,
                    date: new Date().toLocaleString(),
                    isSend: false
                })));
                dispatch(setCommentText(''));
                // setTimeout(() => {
                //     dispatch(setSendMessages({
                //         text: resTextList,
                //         date: new Date().toLocaleString(),
                //         isSend: false
                //     }));
                //     dispatch(setCommentText(''));
                // }, 2000);

            };
        };
    };

    const sendOnClickHandler = () => {
        dispatch(setSendMessages({
            text: commentText,
            date: new Date().toLocaleString(),
            isSend: true
        }));
        setTimeout(() => {
            dispatch(setSendMessages({
                text: resTextList,
                date: new Date().toLocaleString(),
                isSend: false
            }));
            dispatch(setCommentText(''));
        }, 2000);
    };

    return (
        <CommentPageContainer>
            <SubContainer>
                <CloseBtn onClick={closeClickHandler}>X</CloseBtn>
                <ChatContainer>
                    {sendTextList.map(({ text, date, isSend }, idx) =>
                        <Send isSend={isSend} key={text + date + idx}>
                            {/* <TextBox rows="1" readOnly value={`${text}`} /> */}
                            <TextBox text={text} isSend={isSend} />
                            <DateContainer sendState={isSend}>
                                {date}
                            </DateContainer>
                        </Send>)}
                </ChatContainer>
                <ChatDiv>
                    <ChatSubDiv>
                        <ChatInput value={commentText} onChange={(e) => dispatch(setCommentText(e.target.value))} onKeyDown={pressEnterHandler} />
                        <SendBtn onClick={sendOnClickHandler} type="button" bgColor={commentText} disabled={commentText === "" ? 'disabled' : null} />
                        
                    </ChatSubDiv>
                </ChatDiv>
            </SubContainer>
        </CommentPageContainer>
    );
};

export default Comment;