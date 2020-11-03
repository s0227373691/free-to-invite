import React, { useState } from 'react';
import styled from 'styled-components';

import Button from './commom/baseTag/button';
import Login from './login';
import Register from './register';

const Header = () => {
    const [search, setSearch] = useState('');
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    return (
        <>
            <Head>
                <MenuBtn>三</MenuBtn>
                <Search onChange={(e) => setSearch(e.target.value)} />
                <BtnLogin onClick={() => setLogin(true)}>登入</BtnLogin>
                <BtnLogin onClick={() => setRegister(true)}>註冊</BtnLogin>
            </Head>
            <Login login={login} setLogin={setLogin} />
            <Register register={register} setRegister={setRegister} />
        </>
    );
};

export default Header;

const Head = styled.header`
    width: 100%;
    padding: 8px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    box-sizing: border-box;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const MenuBtn = styled(Button)`
    padding: 5px;
`;

const Search = styled.input`
    width: 500px;
    height: 35px;
`;

const BtnLogin = styled(Button)`
    height: min-content;
    margin: 5px;
    padding: 15px;
    border-radius: 5px;
    font-size: 18px;

    &:hover {
        color: #ffffff;
        background: #c4c4c4;
        transition: 0.3s;
    }
`;
