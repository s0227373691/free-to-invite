import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { getBadmintonListData } from '../../lib/api/getActive/badminton';

const badmintonList = () => {
    const [badmintonList, setbadmintonList] = useState([]);
    const badmintonListRef = useRef([]);
    const handleScroll = (event) => {
        const scrollTop = event.srcElement.documentElement.clientHeight;
        const clientHeight = event.srcElement.documentElement.scrollTop;
        const scrollHeight = event.srcElement.documentElement.scrollHeight;
        if (scrollTop + clientHeight === scrollHeight) fetchData();
    };
    const fetchData = async () => {
        const data = await getBadmintonListData(
            badmintonListRef.current.length
        );
        badmintonListRef.current = [
            ...badmintonListRef.current,
            ...data.badmintonList,
        ];
        setbadmintonList([...badmintonListRef.current]);
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        fetchData();
    }, []);
    return (
        <BadmintonListRoot>
            <TypeName>羽球</TypeName>
            {badmintonList
                ? badmintonList.map((item) => {
                      const { _id, title } = item;
                      return <Item key={_id}>{title}</Item>;
                  })
                : null}
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
const Item = styled.li`
    width: 100%;
    height: 200px;
    border: 1px solid rgba(128, 134, 139, 0.2);
    border-radius: 10px;
`;
