import React from 'react';
import styled from 'styled-components';

const TextBoxContainer = styled.div`
    width: 400px;
    white-space: pre-line;
    background-color: white;
    border-radius: 8px;
    padding: 4px;
    right: 0px;
    margin-left: ${(props) => props.marginLeft ? null : 'auto'};
`;

const TextBox = ({ text, isSend }) => {
    return (
        <TextBoxContainer marginLeft={isSend}>
            {text}
        </TextBoxContainer>
    );
};

export default TextBox;