import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Menu = () => {
    return (
        <Aside>
            <NavMeun>
                <NavItem className="">
                    <Link className="navLink">休閒</Link>
                    <ClassMenu className="classMenu">
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
                    <Link className="navLink">運動</Link>
                    <ClassMenu className="classMenu">
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
                    <Link className="navLink">旅遊</Link>
                    <ClassMenu className="classMenu">
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
    width: 300px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px 0;
`;

const NavMeun = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 20px;
    position: relative;
`;
const NavItem = styled.li`
    &:hover .classMenu {
        display: block;
    }
    .navLink {
        display: block;
        color: black;
    }
    .classMenu {
        display: none;
        border: 1px solid black;
        position: absolute;
        left: 100%;
        top: 0;
        background: red;
        width: 300px;
    }
`;
const ClassMenu = styled.ul``;
const ClassItem = styled.li``;
export default Menu;
