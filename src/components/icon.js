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
        width: 48px;
        height: 48px;
    };
    filter: drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.2));
`;

const IconImg = styled.div`
    position: relative;
    border-radius: 8px;
    width: 52px;
    height: 52px;
    background-color: red;
    background: url(${(props) => props.icon});
    background-size: 100%;
    transition: all 0.2s ease-in-out;
`;

const IconText = styled.div`
    position: absolute;
    padding: 3px;
    top: -15px;
    left: 50%;
    transform: translate(-50%, -50%);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
    visibility: ${(props) => props.visibility};
    height: 25%;
    width: max-content;
    background-color: rgba(255, 255, 255, 0.5);
    color: #000000;
    text-align: center;
    font-size: 12px;
    line-height: 12px;
    :after {
        position: absolute;
        top:18px;
        left: 50%;
        transform: translate(-50%, 0%);
        border: solid transparent;
        border-color: rgba(51, 51, 51, 0);
        border-top-color: rgba(255, 255, 255, 0.5);
        border-width: 4px;
        pointer-events: none;
        content: ' ';
    }
`;

const Icon = ({ text, onClick, iconImg }) => {
    const [isHovering, setIsHovering] = useState(false);
    return (
        <IconDiv>
            <IconImg icon={iconImg} onClick={onClick} onMouseOver={() => setIsHovering(true)} onMouseOut={() => setIsHovering(false)}>
                {isHovering ? <IconText>{text}</IconText> : null}
            </IconImg>
        </IconDiv>
    );
};

export default Icon;