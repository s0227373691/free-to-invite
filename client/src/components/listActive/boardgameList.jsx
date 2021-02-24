import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { getBoardGameListData } from '../../lib/api/getActive/boardGame';

const boardgameList = () => {
    const [boardgameList, setBoardgameList] = useState([]);
    const boardgameListRef = useRef([]);
    const handleScroll = (event) => {
        const scrollTop = event.srcElement.documentElement.clientHeight;
        const clientHeight = event.srcElement.documentElement.scrollTop;
        const scrollHeight = event.srcElement.documentElement.scrollHeight;
        if (scrollTop + clientHeight === scrollHeight) fetchData();
    };
    const fetchData = async () => {
        const data = await getBoardGameListData(
            boardgameListRef.current.length
        );
        boardgameListRef.current = [
            ...boardgameListRef.current,
            ...data.boardgameList,
        ];
        setBoardgameList([...boardgameListRef.current]);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        fetchData();
    }, []);
    return (
        <BoardgameListRoot>
            <Title
                onClick={() => {
                    console.log(boardgameList.length);
                }}
            >
                桌由桌由桌由桌由桌由桌由桌由桌由桌由桌由桌由桌由桌由桌由桌由桌由桌由桌由桌由
            </Title>
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
                          return <Item key={index}>{title}</Item>;
                      })
                    : null}
            </List>
        </BoardgameListRoot>
    );
};

export default boardgameList;

const BoardgameListRoot = styled.div`
    max-width: 720px;
`;
const Title = styled.div`
    height: 300px;
`;
const List = styled.ul``;
const Item = styled.li`
    width: 100%;
    height: 200px;
    border: 1px solid rgba(128, 134, 139, 0.2);
    border-radius: 10px;
`;
