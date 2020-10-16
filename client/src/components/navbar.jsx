import React from 'react';
import styled from 'styled-components';

const NavBar = () => {
    return (
        <Navbar>
            <Btn>登入</Btn>
            <Btn>註冊</Btn>
        </Navbar>
    );
};

export default NavBar;

const Navbar = styled.nav`
    width: 100%;
    height: 80px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Btn = styled.button`
    height: min-content;
    margin: 5px;
    padding: 15px;
    border-radius: 50%;
    font-size: 18px;
    background: white;
    outline-style: none;
    border: 0px;
    cursor: pointer;

    &:hover {
        color: white;
        background: gray;
        transition: 0.3s;
    }
`;
