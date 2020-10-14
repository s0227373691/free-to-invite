import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
    return (
        <Header>
            <Navbar></Navbar>
        </Header>
    );
};

export default NavBar;

const Header = styled.header`
    background: #2ecc71;
`;
const Navbar = styled.div`
    max-width: 1280px;
    height: 100px;
    margin: 0 auto;
`;
