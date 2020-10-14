import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <Aside>
            <Title>
                <Link className="logoLink" to="/" />
            </Title>
        </Aside>
    );
};

const Aside = styled.aside`
    width: 300px;
    height: 100vh;
    background: #74b9ff;
`;
const Title = styled.h1``;
export default Menu;
