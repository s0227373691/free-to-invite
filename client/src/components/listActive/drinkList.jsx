import React from 'react';
import styled from 'styled-components';

import { getDrinkListData } from '../../lib/api/getActive/drink';

const DrinkList = () => {
    return (
        <DrinkListRoot>
            <TypeName>喝酒</TypeName>
        </DrinkListRoot>
    );
};

export default DrinkList;

const DrinkListRoot = styled.div`
    max-width: 720px;
`;
const TypeName = styled.div`
    height: 300px;
`;
