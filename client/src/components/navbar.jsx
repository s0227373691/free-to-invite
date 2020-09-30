import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import hanbuger from '../assets/svg/hanbuger.svg';
import searchIcon from '../assets/svg/searchIcon.svg';
const NavBar = () => {
    let [open, setOpen] = useState({
        display: 'flex',
        flexDirection: 'column',
        padding: '0px',
        textAlign: 'center',
        height: '300px',
        maxHeight: '288px',
    });

    return (
        <Header>
            <Logo>
                <Link className="logoLink" to="/">
                    股票
                </Link>
                <LogoIcon
                    src={hanbuger}
                    onClick={() => {
                        setOpen((open = !open));
                        console.log(open);
                    }}
                ></LogoIcon>
            </Logo>
            <NavbarMenu style={open ? {} : { maxHeight: '288px' }}>
                <NavbarItem>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </NavbarItem>
                <NavbarItem>
                    <Link className="navLink" to="/">
                        股票
                    </Link>
                </NavbarItem>
            </NavbarMenu>
            <SearchBar>
                <SearchInput type="search" />
                <SearchBtn className="searchBtn">
                    <img src={searchIcon} />
                </SearchBtn>
            </SearchBar>
            <UserMenu>
                <UserMenuItem>
                    <Link className="userLink" to="/">
                        登入
                    </Link>
                </UserMenuItem>
                <UserMenuItem>
                    <Link className="userLink" to="/">
                        註冊
                    </Link>
                </UserMenuItem>
            </UserMenu>
        </Header>
    );
};

export default NavBar;

const Header = styled.header`
    max-width: 1280px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    padding: 10px 15px;
    @media (max-width: 767px) {
        padding: 10px 7.5px;
    }
`;

const Logo = styled.h1`
    .logoLink {
        display: block;
        width: 36px;
        height: 36px;
        text-indent: 100%;
        white-space: nowrap;
        overflow: hidden;
        background: url(http://fakeimg.pl/36x36);
        @media (max-width: 767px) {
            display: none;
        }
    }
`;

const LogoIcon = styled.img`
    padding: 6px;
    @media (min-width: 767px) {
        display: none;
    }
`;

const NavbarMenu = styled.ul`
    display: flex;
    flex-shrink: 0;
    padding: 0 7.5px;
    transition: 0.5s;
    @media (max-width: 767px) {
        width: 100%;
        max-height: 0;
        overflow: hidden;
        position: absolute;
        top: 56px;
        left: 0;
        right: 0;
        flex-direction: column;
        text-align: center;
        display: flex;
        padding: 0px;
        text-align: center;
    }
`;

const NavbarItem = styled.li`
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
        transition: 0.3s;
        &:hover {
            color: #fff;
            background: #1b9cfc;
        }
        @media (max-width: 767px) {
            width: 100%;
            border-bottom: 1px solid black;
        }
    }
`;

const SearchBar = styled.div`
    display: flex;
    flex-grow: 1;
    max-width: 430px;
    height: 36px;
    border: 2px solid #dfdfdf;
    background: #fafafa;
    border-radius: 5px;
`;

const SearchInput = styled.input`
    width: 100%;
    border: none;
    padding-left: 10px;
    font-weight: 600;
    font-size: 14px;
    background: #fafafa;
    &:focus {
        outline: none;
    }
`;
const SearchBtn = styled.button`
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
        transition: 0.3s;
        &:hover {
            background: #1b9cfc;
            color: #fff;
            border-radius: 5px;
        }
    }
`;

const UserMenuItem = styled.li``;
