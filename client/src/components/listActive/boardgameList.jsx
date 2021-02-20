import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import { getBoardGameListData } from '../../lib/api/getActive/boardGame';

const boardgameList = () => {
    const [boardgameList, setBoardgameList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getBoardGameListData();
            console.log(data.boardgameList);
            await setBoardgameList(data.boardgameList);
        };
        fetchData();
    }, []);
    return (
        <BoardgameListRoot>
            <Title onClick={() => console.log(boardgameList)}></Title>

            <List>
                {boardgameList
                    ? boardgameList.map((item, index) => {
                          const {
                              _id,
                              title,
                              content,
                              startDate,
                              endDate,
                              cost,
                              place,
                              population,
                              //   addedBoardGameList,
                          } = item;
                          return <Item key={_id}>{title}</Item>;
                      })
                    : null}
            </List>
        </BoardgameListRoot>
    );
};

export default boardgameList;

const BoardgameListRoot = styled.div``;
const Title = styled.div``;
const List = styled.ul``;
const Item = styled.li``;
