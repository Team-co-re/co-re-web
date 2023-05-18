import React, { useState } from 'react';
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

const IconDiv = styled.div`
    display: flex;
    margin: 16px;
    width: 64px;
    height: 64px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const IconImg = styled.div`
    width: 52px;
    height: 52px;
    background-color: red;
    transition: all 0.2s ease-in-out;
    :hover {
        cursor: pointer;
        background-color: purple;
        width: 48px;
        height: 48px;
    };
`;

const IconText = styled.div`
    transition: all 0.2s ease-in-out;
    visibility: ${(props) => props.visibility};
    width: 100%;
    height: 25%;
    background-color: red;
    color: black;
    text-align: center;
    font-size: 4px;
`;

const Image = styled.div`
    transition: all 0.2s ease-in-out;
    width: 100%;
    height: 75%;
    background-color: green;
    
`;

const Menu = () => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <Container>
            <SubContainer>
                <IconDiv>
                    <IconImg onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
                        {isHovering ? <><Image /><IconText>123</IconText></> : null}
                    </IconImg>
                </IconDiv>
                
                <IconDiv>
                    <IconImg onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
                        {isHovering ? <><Image /><IconText>123</IconText></> : null}
                    </IconImg>
                </IconDiv>

                <IconDiv>
                    <IconImg onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
                        {isHovering ? <><Image /><IconText>123</IconText></> : null}
                    </IconImg>
                </IconDiv>

                <IconDiv>
                    <IconImg onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
                        {isHovering ? <><Image /><IconText>123</IconText></> : null}
                    </IconImg>
                </IconDiv>

            </SubContainer>
        </Container>
    );
};

export default Menu;