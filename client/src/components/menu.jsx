import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
                    <Link to="newarticle" className="navLink">
                        新增文章
                    </Link>
                </UserItem>
                <NavItem>
                    <Link
                        className="navLink"
                        to={(location) => `${location.pathname}`}
                    >
                        休閒
                    </Link>
                    <ClassMenu className="classMenu">
                        <Diamond></Diamond>
                        <ClassItem>
                            <a href="#">休閒分類</a>
                        </ClassItem>
                        <ClassItem>
                            <a href="#">休閒分類</a>
                        </ClassItem>
                        <ClassItem>
                            <a href="#">休閒分類</a>
                        </ClassItem>
                    </ClassMenu>
                </NavItem>
                <NavItem>
                    <Link
                        className="navLink"
                        to={(location) => `${location.pathname}`}
                    >
                        運動
                    </Link>
                    <ClassMenu className="classMenu">
                        <Diamond></Diamond>
                        <ClassItem>
                            <a href="#">運動分類</a>
                        </ClassItem>
                        <ClassItem>
                            <a href="#">運動分類</a>
                        </ClassItem>
                        <ClassItem>
                            <a href="#">運動分類</a>
                        </ClassItem>
                    </ClassMenu>
                </NavItem>
                <NavItem>
                    <Link
                        className="navLink"
                        to={(location) => `${location.pathname}`}
                    >
                        旅遊
                    </Link>
                    <ClassMenu className="classMenu">
                        <Diamond></Diamond>
                        <ClassItem>
                            <a href="#">旅遊分類</a>
                        </ClassItem>
                        <ClassItem>
                            <a href="#">旅遊分類</a>
                        </ClassItem>
                        <ClassItem>
                            <a href="#">旅遊分類</a>
                        </ClassItem>
                    </ClassMenu>
                </NavItem>
            </NavMeun>
        </Aside>
    );
};

const Aside = styled.aside`
    width: 280px;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
    background: #74b9ff;
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
    left: 54px;
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
