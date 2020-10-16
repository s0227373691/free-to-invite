import React from 'react';
import styled from 'styled-components';

const Member = () => {
    return (
        <div>
            <ColorDiv3>
                Public profile <hr />
            </ColorDiv3>
            <ColorDiv>
                Name
                <input type="text" />
            </ColorDiv>

            <ColorDiv1 />
            <ColorDiv2 />
        </div>
    );
};

export default Member;

const ColorDiv = styled.div`
    width: auto;
    height: 40px;
    background-color: red;
`;
const ColorDiv1 = styled.div`
    width: 100px;
    height: 40px;
    background-color: yellow;
`;
const ColorDiv2 = styled.div`
    width: 100px;
    height: 40px;
    background-color: blue;
`;

const ColorDiv3 = styled.div`
    /* font-size: 50px; */
    font-size: 20px;
`;
