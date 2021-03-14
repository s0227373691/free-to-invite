import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

import BadmintonList from './board/badmintonList';

const Board = () => {
    const [pathname, setPathname] = useState(useLocation().pathname);
    const [boardName, setBoardName] = useState('');
    const [activeList, setActiveList] = useState(null);

    useEffect(() => {
        init();
    }, []);

    const init = () => {
        axios
            .get(`http://localhost:3000/api/board${pathname}`)
            .then((res) => res.data)
            .then((res) => {
                setActiveList(res.data);
                setBoardName(res.type);
            });
    };

    const renderActiveListComponent = () => {
        switch (boardName) {
            case '羽球':
                return <BadmintonList activeList={activeList} />;

            case '籃球':
                return <div>籃球component</div>;

            default:
                break;
        }
    };

    return (
        <Container>
            <Title>{boardName}</Title>
            {renderActiveListComponent()}
        </Container>
    );
};

const Container = styled.div`
    max-width: 800px;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2``;
export default Board;
