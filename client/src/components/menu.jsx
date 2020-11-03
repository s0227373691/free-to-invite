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

export default NewArticle;

const Container = styled.div``;
const Form = styled.form``;
const Upperlock = styled.div`
    input[type='date'] {
        width: 200px;
    }
    input[type='text'] {
    }
`;

const Select = styled.select`
    margin: 20px;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
    option {
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 0;
        margin: 0 auto;
    }
    input[type='text'] {
    }
`;
const LowerBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

const SendBtn = styled.button``;
