import React from 'react';
import styled from 'styled-components';

const badmintonList = () => {
    return (
        <BadmintonListRoot>
            <TypeName>羽球</TypeName>
        </BadmintonListRoot>
    );
};

export default badmintonList;

const BadmintonListRoot = styled.div`
    max-width: 720px;
`;
const TypeName = styled.div`
    height: 300px;
`;
