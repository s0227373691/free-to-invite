import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from './commom/baseTag/button';
import Login from './login';
import Register from './register';
import { userCheckedLoginStatus } from '../store/slices/users';
import menuList from '../lib/menuList.js';
import logo from '../assets/img/logo.jpg';

const Header = (props) => {
    const [search, setSearch] = useState('');
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const { loggedIn, user } = props.users;
    return (
        <div style={{ height: '80px' }}>
            <Head>
                <div>
                    <img src={logo} alt="" />
                </div>
                <NavMeun>
                    <UserItem>
                        <Link to="/">首頁</Link>
                    </UserItem>
                    <UserItem>
                        <Link to="/newarticle">新增文章</Link>
                    </UserItem>
                    <UserItem>
                        <Link to="/member">個人檔案</Link>
                    </UserItem>
                    <UserItem>
                        <Link to="/myarticle">我的文章</Link>
                    </UserItem>
                </NavMeun>
                <NavMeun>
                    {menuList.map((list) => {
                        return (
                            <NavItem key={list.primaryType}>
                                <Link className="navLink" to={list.path}>
                                    {list.primaryType}
                                </Link>
                                <ClassMenu className="classMenu">
                                    <Diamond></Diamond>
                                    {list.content.map((minorType) => {
                                        return (
                                            <ClassItem
                                                key={minorType.minorType}
                                            >
                                                <Link to={minorType.path}>
                                                    {minorType.minorType}
                                                </Link>
                                            </ClassItem>
                                        );
                                    })}
                                </ClassMenu>
                            </NavItem>
                        );
                    })}
                    <div>
                        Logo通過
                        <a
                            href="https://www.designevo.com/tw/logo-maker/"
                            title="免費線上logo製作軟體"
                        >
                            DesignEvo
                        </a>
                        設計製作
                    </div>
                </NavMeun>
                {/* <Search
                    placeholder="搜尋"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                /> */}

                {loggedIn ? (
                    <BtnUser>
                        Hi {user.name}
                        <div className="logout">
                            <div>logout</div>
                            <div>logout</div>
                            <div>logout</div>
                            <div>logout</div>
                            <div>logout</div>
                            <div>logout</div>
                            <div>logout</div>
                            <div>logout</div>
                            <div>logout</div>
                            <div>logout</div>
                        </div>
                    </BtnUser>
                ) : (
                    <>
                        <BtnLogin onClick={() => setLogin(true)}>登入</BtnLogin>
                        <BtnLogin onClick={() => setRegister(true)}>
                            註冊
                        </BtnLogin>
                    </>
                )}
            </Head>
            {loggedIn ? null : (
                <>
                    <Login login={login} setLogin={setLogin} />
                    <Register register={register} setRegister={setRegister} />
                </>
            )}
        </div>
    );
};

const mapStateToProps = (state) => state;

const mapDispatchToProps = { userCheckedLoginStatus };

export default connect(mapStateToProps, mapDispatchToProps)(Header);
const Head = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 100;
    margin: 0 auto;
    background: white;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const Search = styled.input`
    width: 500px;
    height: 35px;
    margin-right: 100px;
`;

const BtnLogin = styled(Button)`
    height: min-content;
    margin: 5px;
    padding: 7px 10px;
    border-radius: 5px;
    font-size: 18px;

    &:hover {
        color: #ffffff;
        background: #c4c4c4;
        transition: 0.3s;
    }
`;

const BtnUser = styled(Button)`
    width: 150px;
    height: 50px;
    line-height: 50px;
    box-sizing: content-box;

    &:hover .logout {
        display: block;
    }
    .logout {
        display: none;
        position: absolute;
        background: grey;
        width: 150px;
    }
`;

const UserItem = styled.li`
    a {
        width: 100%;
        padding: 5px 20px;
        color: #3e3e3e;
        display: block;
        box-sizing: border-box;
        &:hover {
            color: #717070;
        }
    }
`;

const NavMeun = styled.ul`
    width: 100%;
    font-size: 20px;
`;

const NavItem = styled.li`
    position: relative;
    padding: 5px 20px;
    &:hover .classMenu {
        display: block;
    }
    .navLink {
        color: black;
    }
    .classMenu {
        display: none;
    }
`;

const ClassMenu = styled.ul`
    padding: 10px;
    position: absolute;
    background: #fff;
    filter: drop-shadow(rgba(0, 0, 0, 1) 0px 3px 12px);
    top: calc(-50% - 25px);
    border-radius: 10px;
    width: 150px;
    white-space: nowrap;
    left: 44px;
    right: 0;
`;

const Diamond = styled.div`
    background: #fff;
    position: absolute;
    top: 45px;
    left: -5px;
    margin: 0 auto;
    width: 20px;
    height: 20px;
    transform: rotate(45deg);
`;

const ClassItem = styled.li`
    padding: 0 10px;
`;
