import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const a = () => {
    this.setState({
        open: !this.state.open,
    });
};
const NavBar = () => {
    return (
        <Header>
            <H1>
                <Link className="logoLink" to="/">
                    股票
                </Link>
                <button className="hanbuger">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                    >
                        <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
                    </svg>
                </button>
            </H1>
            <NavbarMenu>
                <li>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </li>
                <li>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </li>
                <li>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </li>
                <li>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </li>
                <li>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </li>
                <li>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </li>
                <li>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </li>
                <li>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </li>
            </NavbarMenu>
            <SearchBar>
                <input type="search" />
                <button className="searchBtn">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                    >
                        <path d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z" />
                    </svg>
                </button>
            </SearchBar>
            <UserMenu>
                <li>
                    <Link className="userLink" to="/">
                        登入
                    </Link>
                </li>
                <li>
                    <Link className="userLink" to="/">
                        註冊
                    </Link>
                </li>
            </UserMenu>
        </Header>
    );
};

export default NavBar;

const Header = styled.header`
    display: flex;
    align-items: center;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    max-width: 1280px;
    padding: 10px 15px;
    background: #fff;
`;

const H1 = styled.h1`
    display: flex;
    .logoLink {
        display: block;
        width: 36px;
        height: 36px;
        text-indent: 101%;
        white-space: nowrap;
        overflow: hidden;
        background: url(http://fakeimg.pl/36x36);
        @media (max-width: 767px) {
            display: none;
        }
    }
    .hanbuger {
        width: 36px;
        height: 36px;
        background: inherit;
        border: none;
        &:focus {
            outline: none;
        }
        @media (min-width: 767px) {
            display: none;
        }
    }
`;
const NavbarMenu = styled.ul`
    display: flex;
    flex-shrink: 0;
    padding: 0 7.5px;
    @media (max-width: 767px) {
        display: none;
    }
    .navLink {
        display: block;
        height: 36px;
        line-height: 36px;
        text-decoration: none;
        padding: 0 7.5px;
        color: #434343;
        font-weight: 900;
        font-size: 15px;
        border-radius: 5px;
        transition: 0.1s;
        &:hover {
            color: #fff;
            background: #1b9cfc;
            transition: 0.1s;
        }
    }
`;

const SearchBar = styled.div`
    max-width: 430px;
    height: 36px;
    flex-grow: 1;
    display: flex;
    border: 2px solid #dfdfdf;
    background: #fafafa;
    border-radius: 5px;
    input[type='search'] {
        width: 100%;
        height: 100%;
        border: none;
        padding-left: 10px;
        font-weight: 600;
        font-size: 14px;
        background: #fafafa;
        &:focus {
            outline: none;
        }
    }
    .searchBtn {
        width: 36px;
        border: none;
        background: inherit;
        display: flex;
        align-items: center;
        &:focus {
            outline: none;
        }
        &:hover {
            cursor: pointer;
        }
    }
`;
const UserMenu = styled.ul`
    display: flex;
    margin-left: auto;
    .userLink {
        display: block;
        width: 54px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        text-decoration: none;
        color: #434343;
        font-weight: 900;
        transition: 0.1s;
        &:hover {
            background: #1b9cfc;
            color: #fff;
            border-radius: 5px;
            transition: 0.2s;
        }
    }
`;
