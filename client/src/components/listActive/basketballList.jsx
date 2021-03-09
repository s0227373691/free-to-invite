import React from 'react';
import styled from 'styled-components';

import { getBasketballListData } from '../../lib/api/getActive/basketball';

const basketballList = () => {
    return (
        <BasketballListRoot>
            <TypeName>藍球</TypeName>
        </BasketballListRoot>
    );
};

export default basketballList;

const BasketballListRoot = styled.div`
    max-width: 720px;
`;
const TypeName = styled.div`
    height: 300px;
`;
