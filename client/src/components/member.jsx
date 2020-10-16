import React from 'react';
import styled from 'styled-components';

const Member = () => {
    return (
        <div>
            Member
            <ColorDiv />
            <ColorDiv1 />
            <ColorDiv2 />
        </div>
    );
};

export default Member;

const ColorDiv = styled.div`
    width: 100px;
    height: 100px;
    background-color: red;
`;
const ColorDiv1 = styled.div`
    width: 100px;
    height: 100px;
    background-color: yellow;
`;
const ColorDiv2 = styled.div`
    width: 100px;
    height: 100px;
    background-color: blue;
`;
