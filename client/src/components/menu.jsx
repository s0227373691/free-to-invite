import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import menuList from '../../menuList.js';

const Menu = () => {
    return (
        <Aside>
            <NavMeun>
                <UserItem>
                    <Link to="/" className="navLink">
                        首頁
                    </Link>
                </UserItem>
                <UserItem>
                    <Link to="/newarticle" className="navLink">
                        新增文章
                    </Link>
                </UserItem>
                <UserItem>
                    <Link to="/member" className="navLink">
                        個人檔案
                    </Link>
                </UserItem>
                <UserItem>
                    <Link to="/myarticle" className="navLink">
                        我的文章
                    </Link>
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
                                    console.log(minorType);
                                    return (
                                        <ClassItem key={minorType.minorType}>
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
            </NavMeun>
        </Aside>
    );
};

const Aside = styled.aside`
    width: 280px;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
    background: #74b9ff;
    min-width: 150px;
`;

const UserItem = styled.li``;
const NavMeun = styled.ul`
    font-size: 20px;
`;

const NavItem = styled.li`
    position: relative;
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

export default Menu;
