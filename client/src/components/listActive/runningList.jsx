import React from 'react';
import styled from 'styled-components';

import { getRunningListData } from '../../lib/api/getActive/running';

const runningList = () => {
    return (
        <RunningListRoot>
            <TypeName>慢跑</TypeName>
        </RunningListRoot>
    );
};

export default runningList;

const RunningListRoot = styled.div`
    max-width: 720px;
`;
const TypeName = styled.div`
    height: 300px;
`;
