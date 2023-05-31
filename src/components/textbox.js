import React from 'react';
import styled from 'styled-components';

const TextBoxContainer = styled.div`
    width: max-content;
    white-space: pre-line;
    max-width: 400px;
    background-color: white;
    border-radius: 8px;
    padding: 4px;
    background-color: ${(props) => props.sendState ? '	#fef01b' : '#ffffff' };
    margin-left: ${(props) => props.marginLeft ? 'auto' : null};
    text-align: ${(props) => props.marginLeft ? 'right' : 'left'};

`;

const TextBox = ({ text, isSend }) => {
    return (
        <TextBoxContainer sendState={isSend} marginLeft={isSend}>
            {text}
        </TextBoxContainer>
    );
};

export default TextBox;