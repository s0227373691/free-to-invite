import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Button from './commom/baseTag/button';
import Login from './login';
import Register from './register';
import { userCheckedLoginStatus } from '../store/slices/users';
import menuList from '../lib/menuList.js';
import logo from '../assets/img/logo';
import { ButtonClearDefault } from './styles/buttons';

const Header = (props) => {
    const [search, setSearch] = useState('');
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);

    const { loggedIn, user } = props.users;
    return (
        <Contener>
            <Head>
                <Logo>
                    <Link className="logoLink" to="/">
                        <img src={logo} alt="image load fail..." />
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
                    {loggedIn ? (
                        <BtnUser>
                            {user.name}
                            <DropUser className="userDrop">
                                <a href="http://localhost:1000/" target="_blank">後台管理</a>

                                <ItemUser>
                                    <Link to="/personalinformation">
                                        個人資料
                                    </Link>
                                </ItemUser>
                                <ItemUser>
                                    <Link to="/member">個人檔案</Link>
                                </ItemUser>
                                <ItemUser>
                                    <Link to="/newactive">新增活動</Link>
                                </ItemUser>
                                <ItemUser>
                                    <Link to="/myarticle">我的文章</Link>
                                </ItemUser>
                                <ItemUser>登出</ItemUser>
                            </DropUser>
                        </BtnUser>
                    ) : (
                        <>
                            <Item onClick={() => setLogin(true)}>
                                <Link to="#">登入</Link>
                            </Item>
                            <Item onClick={() => setRegister(true)}>
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
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px,
        rgba(0, 0, 0, 0.23) 0px 6px 6px;

    &:hover {
        opacity: 1;
        transition: 0.3s;
    }
`;

const Logo = styled.h1`
    display: flex;
    .logoLink {
        display: block;
        img {
            height: 110px;
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

const BtnUser = styled(ButtonClearDefault)`
    width: 150px;
    padding: 10px;
    color: #2d3436;
    font-size: 16px;
    &:hover {
        color: #0984e3;
    }

    &:hover .userDrop {
        color: black;
        display: block;
    }
`;

const DropUser = styled.ul`
    padding: 0 10px;
    display: none;
    position: absolute;
    box-sizing: border-box;
    background-color: #c4c4c4;
`;
const ItemUser = styled.li`
    &:hover {
        color: #0984e3;
    }
`;
