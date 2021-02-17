import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getBoardGameListData } from '../../lib/api/getActive/boardGame';

const boardgameList = () => {
    const [boardgameList, setBoardgameList] = useState([]);

    useEffect(() => {
        const data = () => getBoardGameListData();
        console.log(data);
        setBoardgameList(data);

        console.log(boardgameList);
    }, []);
    return (
        <BoardgameListRoot>
            <Title>桌遊</Title>
            <List>
                {/* {boardgameList.map(({ title }) => {
                    <div>{title}</div>;
                })} */}
                {/* {activeTypeList.map(({ type, activeList }) => (
                    <optgroup key={type} label={type}>
                        {activeList.map(({ name }) => (
                            <option key={name} value={name}>
                                {name}
                            </option>
                        ))}
                    </optgroup>
                ))} */}
                <Item></Item>
            </List>
        </BoardgameListRoot>
    );
};

export default boardgameList;

const BoardgameListRoot = styled.div``;
const Title = styled.div``;
const List = styled.ul``;
const Item = styled.li``;
