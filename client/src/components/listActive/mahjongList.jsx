import React from 'react';
import styled from 'styled-components';

import { getMahjongListData } from '../../lib/api/getActive/mahjong';

const mahjongList = () => {
    return (
        <MahjongListRoot>
            <TypeName>麻將</TypeName>
        </MahjongListRoot>
    );
};

export default mahjongList;

const MahjongListRoot = styled.div`
    max-width: 720px;
`;
const TypeName = styled.div`
    height: 300px;
`;
