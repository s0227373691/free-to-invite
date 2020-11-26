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
                <Logo>
                    <Link className="logoLink" to="/">
                        <img src={logo} alt="" />
                    </Link>
                </Logo>

                <NavMeun>
                    {menuList.map((list) => {
                        return (
                            <DropItem key={list.primaryType}>
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
                            </DropItem>
                        );
                    })}
                    <Item>
                        <Link to="/newarticle">新增文章</Link>
                    </Item>
                    <Item>
                        <Link to="/member">個人檔案</Link>
                    </Item>
                    <Item>
                        <Link to="/myarticle">我的文章</Link>
                    </Item>
                    {loggedIn ? (
                        <DropItem>
                            Hi {user.name}
                            <ClassMenu className="classMenu">
                                <Diamond></Diamond>
                                <ClassItem>
                                    <Link to="#">123</Link>
                                    <Link to="#">123</Link>
                                    <Link to="#">123</Link>
                                    <Link to="#">123</Link>
                                    <Link to="#">123</Link>
                                </ClassItem>
                            </ClassMenu>
                        </DropItem>
                    ) : (
                        <>
                            <Item onClick={() => setLogin(true)}>
                                <Link to="#">登入</Link>
                            </Item>
                            <Item onClick={() => setRegister(true)}>
                                {' '}
                                <Link to="#">註冊</Link>
                            </Item>
                        </>
                    )}
                </NavMeun>

                {/* <div>
                        Logo通過
                        <a
                            href="https://www.designevo.com/tw/logo-maker/"
                            title="免費線上logo製作軟體"
                        >
                            DesignEvo
                        </a>
                        設計製作
                    </div> */}
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
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* position: fixed; */
    left: 0;
    right: 0;
    z-index: 1000;
    background: #fff;
    padding: 0 15px;
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

const Logo = styled.h1`
    width: 80px;
    height: 40px;
    display: flex;
    .logoLink {
        display: block;
        img {
            width: 80px;
            height: 40px;
        }
    }
`;
const NavMeun = styled.ul`
    display: flex;
    li {
        margin: 0 10px;
    }
    a {
        display: block;
        padding: 10px;
        color: #2d3436;
        transition: 0.3s;
        &:hover {
            color: #0984e3;
        }
    }
`;
const Item = styled.li``;

const DropItem = styled.li`
    position: relative;
    &:hover .classMenu {
        display: block;
    }
`;

const ClassMenu = styled.ul`
    width: 150px;
    display: none;
    padding: 10px;
    position: absolute;
    left: calc(-75px + 50%);
    top: 40px;
    background: #fff;
    filter: drop-shadow(rgba(0, 0, 0, 1) 0px 3px 12px);
    border-radius: 10px;
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

const ClassItem = styled.li``;
