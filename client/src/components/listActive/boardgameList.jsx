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
            <TypeName>
                桌遊
                {/* {states.todolist.map((i) => (
                    <li key={i.id}>{i.name}</li>
                ))} */}
            </TypeName>

            <List>
                {boardgameList
                    ? boardgameList.map((item) => {
                          const {
                              _id,
                              title,
                              content,
                              startDate,
                              endDate,
                              population,
                              cost,
                              place,
                              //   addedBoardGameList,
                          } = item;
                          return (
                              <Item key={_id}>
                                  <Title>{title}</Title>
                                  <Content>{content}</Content>

                                  <StartDate>
                                      開始時間 : {startDate.replace('T', ' ')}
                                  </StartDate>
                                  <EndDate>
                                      結束時間 : {endDate.replace('T', ' ')}
                                  </EndDate>
                                  <Cost>花費 : {cost}</Cost>
                                  <Population>
                                      人數上限 : {population}
                                  </Population>
                                  <Place>地點 : {place}</Place>
                              </Item>
                          );
                      })
                    : null}
            </List>
        </BoardgameListRoot>
    );
};

export default boardgameList;

const BoardgameListRoot = styled.div`
    max-width: 720px;
    margin: 0 auto;
`;
const TypeName = styled.h2`
    font-size: 24px;
    text-align: center;
    padding: 20px 0;
`;
const List = styled.ul``;
const Item = styled.li`
    width: 100%;
    border: 1px solid rgba(128, 134, 139, 0.2);
    border-radius: 10px;
    padding: 10px;
    margin-bottom: 20px;
`;
const Title = styled.h2`
    font-size: 20px;
    padding-bottom: 10px;
`;
const Content = styled.div`
    padding-bottom: 10px;
    line-height: 1.2rem;
`;

const StartDate = styled.div`
    padding-bottom: 10px;
`;
const EndDate = styled.div`
    padding-bottom: 10px;
`;
const Cost = styled.div`
    padding-bottom: 10px;
`;
const Population = styled.div`
    padding-bottom: 10px;
`;
const Place = styled.div`
    padding-bottom: 10px;
`;
