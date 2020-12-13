import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './login';
import Register from './register';
import { ButtonClearDefault } from './styles/buttons';

import { userCheckedLoginStatus } from '../store/slices/users';
import { getUserLogout } from '../lib/api/users/logout';
import activeTypeList from '../lib/activeTypeList.js';
import IconLogo from '../assets/img/logo';

const Header = (props) => {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const { loggedIn } = props.users;
    if (loggedIn)
        var { name: accountName, type: accountType } = props.users.user;

    const handleClickLogout = async () => {
        const { data } = await getUserLogout();
        props.userCheckedLoginStatus(data);
        setLogin(false);
    };
    return (
        <Contener>
            <Head>
                <Logo>
                    <Link to="/">
                        <img src={IconLogo} alt="image load fail..." />
                    </Link>
                </Logo>
                <ActiveTypeList>
                    {activeTypeList.map(({ type, activeList }) => {
                        return (
                            <ActiveType key={type}>
                                <span>{type}</span>
                                <ActiveList className="show-active-list">
                                    <Diamond />
                                    {activeList.map(({ name, icon, path }) => {
                                        return (
                                            <Active key={name}>
                                                <Icon
                                                    src={icon}
                                                    alt="Not found..."
                                                />
                                                <Link to={path}>{name}</Link>
                                            </Active>
                                        );
                                    })}
                                </ActiveList>
                            </ActiveType>
                        );
                    })}
                </ActiveTypeList>
                {loggedIn ? (
                    <Account>
                        {accountName}
                        <AccountActionList className="show-user-dropdown">
                            {accountType === 'admin' ? (
                                <AccountAction>
                                    <a
                                        href="http://localhost:1000/"
                                        target="_blank"
                                    >
                                        後台管理
                                    </a>
                                </AccountAction>
                            ) : null}
                            <AccountAction>
                                <Link to="/personalinformation">個人資料</Link>
                            </AccountAction>
                            <AccountAction>
                                <Link to="/member">個人檔案</Link>
                            </AccountAction>
                            <AccountAction>
                                <Link to="/newactive">新增活動</Link>
                            </AccountAction>
                            <AccountAction>
                                <Link to="/myactive">我的活動</Link>
                            </AccountAction>
                            <AccountAction onClick={handleClickLogout}>
                                登出
                            </AccountAction>
                        </AccountActionList>
                    </Account>
                ) : (
                    <ButtonGroup>
                        <Button onClick={() => setLogin(true)}>登入</Button>
                        <Button onClick={() => setRegister(true)}>註冊</Button>
                    </ButtonGroup>
                )}
            </Head>
            {loggedIn ? null : (
                <>
                    <Login login={login} setLogin={setLogin} />
                    <Register register={register} setRegister={setRegister} />
                </>
            )}
        </Contener>
    );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = { userCheckedLoginStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Header);

const Contener = styled.div`
    height: 80px;
`;

const Head = styled.header`
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    left: 0;
    right: 0;
    z-index: 1000;
    background: #e6e6e6;
    opacity: 0.6;
    padding: 0 15px;
    transition: 0.5s;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;

    &:hover {
        opacity: 1;
        transition: 0.3s;
    }
`;

const Logo = styled.h1`
    display: flex;
    a {
        display: block;
        img {
            height: 110px;
        }
    }
`;
const ActiveTypeList = styled.ul`
    display: flex;
`;

const ActiveType = styled.li`
    position: relative;

    span {
        display: block;
        padding: 10px;
        color: #2d3436;
        transition: 0.3s;
        padding: 15px 25px;

        &:hover {
            cursor: pointer;
            color: #0984e3;
        }
    }
    .show-active-list {
        visibility: hidden;
        opacity: 0;
    }
    &:hover .show-active-list {
        visibility: visible;
        opacity: 1;
        transition: 0.5s;
    }
`;

const ActiveList = styled.ul`
    width: 180px;
    padding: 15px;
    position: absolute;
    left: calc(-90px + 50%);
    background: #fff;
    filter: drop-shadow(rgba(0, 0, 0, 1) 0px 3px 12px);
    border-radius: 10px;
`;

const Active = styled.li`
    padding: 10px 0;
    display: flex;
    align-items: center;

    a {
        width: 100%;
        display: block;
        color: #2d3436;
        transition: 0.3s;
        padding: 15px 25px;

        &:hover {
            color: #0984e3;
        }
    }
`;

const Diamond = styled.div`
    width: 20px;
    height: 20px;
    background: #fff;
    position: absolute;
    top: -5px;
    left: calc(-10px + 50%);
    transform: rotate(45deg);
`;

const Account = styled(ButtonClearDefault)`
    width: 150px;
    padding: 10px;
    color: #2d3436;
    font-size: 16px;
    &:hover {
        color: #0984e3;
    }
    .show-user-dropdown {
        visibility: hidden;
    }
    &:hover .show-user-dropdown {
        visibility: visible;
    }
`;

const AccountActionList = styled.ul`
    padding: 0 10px;
    position: absolute;
    box-sizing: border-box;
    background-color: #c4c4c4;
`;

const AccountAction = styled.li`
    &:hover {
        color: #0984e3;
    }
`;

const Icon = styled.img`
    width: 30px;
    height: 30px;
`;

const ButtonGroup = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Button = styled(ButtonClearDefault)`
    padding: 0 15px;
    font-size: 16px;

    &:hover {
        transition: 0.3s;
        color: #0984e3;
    }
`;
