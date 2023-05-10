import React from 'react';
import styled from 'styled-components';

const FontContainer = styled.div`
    font-size: 16px;
    margin: 0px 20px;
`;

const HeaderFont = ({text}) => {
    return (
        <FontContainer>
            {text}
        </FontContainer>
    );
};

export default HeaderFont;