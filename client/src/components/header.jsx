import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Head>
            <Btn>登入</Btn>
            <Btn>註冊</Btn>
        </Head>
    );
};

export default Header;

const Head = styled.head`
    width: 100%;
    height: 80px;
    padding: 8px;
    margin: 0 auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
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
