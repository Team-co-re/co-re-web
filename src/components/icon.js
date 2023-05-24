import React, { useState } from 'react';
import styled from 'styled-components';

const IconDiv = styled.div`
    display: flex;
    margin: 16px;
    width: 64px;
    height: 64px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    :hover>div {
        cursor: pointer;
        background-color: purple;
        width: 48px;
        height: 48px;
    };
`;

const IconImg = styled.div`
    position: relative;
    border-radius: 8px;
    width: 52px;
    height: 52px;
    background-color: red;
    transition: all 0.2s ease-in-out;
`;

const IconText = styled.div`
    position: absolute;
    bottom: 0;
    border-radius: 0px 0px 8px 8px;
    transition: all 0.2s ease-in-out;
    visibility: ${(props) => props.visibility};
    width: 100%;
    height: 25%;
    background-color: red;
    color: black;
    text-align: center;
    font-size: 4px;
    line-height: 12px;
`;

const Image = styled.div`
    border-radius: 8px 8px 0px 0px;
    transition: all 0.2s ease-in-out;
    width: 100%;
    height: 75%;
    background-color: green;
    
`;

const Icon = ({text, onClick}) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <IconDiv>
            <IconImg onClick={onClick} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
                {isHovering ? <IconText>{text}</IconText> : null}
            </IconImg>
        </IconDiv>
    );
};

export default Icon;