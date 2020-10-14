import React from 'react';
import styled from 'styled-components';

import Aside from '../components/aside';
import Article from '../components/article';

const Main = () => {
    return (
        <Container>
            <Aside></Aside>
            <Article></Article>
        </Container>
    );
};

const Container = styled.div`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
`;
export default Main;
