import styled from 'styled-components';
import Icon from './icon';
import { useDispatch } from 'react-redux';
import { commentModalTrue } from '../redux/slices/commentModalSlice';
import { changeProcess } from '../redux/slices/headerProcessSlice';
import CommentImg from '../assets/imgs/dmu.jpeg';

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
        dispatch(changeProcess('주석처리'));
    };

    return (
        <Container>
            <SubContainer>
                <Icon iconImg={CommentImg} text="주석처리" onClick={commentClickHandler}/>
                <Icon iconImg={CommentImg} text="리팩토링"/>
                <Icon iconImg={CommentImg} text="변수추천"/>
                <Icon iconImg={CommentImg} text="언어변경"/>
                <Icon iconImg={CommentImg} text="맞춤형컨텐츠추천"/>
            </SubContainer>
        </Container>
    );
};

export default Menu;