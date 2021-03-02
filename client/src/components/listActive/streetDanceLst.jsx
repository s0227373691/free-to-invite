import React from 'react';
import styled from 'styled-components';

import { getStreetDanceListData } from '../../lib/api/getActive/streetDance';

const streetDanceList = () => {
    return (
        <StreetDanceListRoot>
            <TypeName>街舞</TypeName>
        </StreetDanceListRoot>
    );
};

export default streetDanceList;

const StreetDanceListRoot = styled.div`
    max-width: 720px;
`;
const TypeName = styled.div`
    height: 300px;
`;
