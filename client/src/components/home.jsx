import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import titlePage from '../assets/img/title-page';

import activeTypeList from '../lib/activeTypeList.js';
import { ButtonClearDefault } from './styles/buttons';

const Home = () => {
    return (
        <>
            <Container>
                <Content>
                    <Title>與朋友聚會!</Title>
                    <ActiveTypeList>
                        {activeTypeList.map(({ type, activeList }) => {
                            return (
                                <ActiveType key={type}>
                                    <span>{type}</span>
                                    <ActiveList className="show-active-list">
                                        <Diamond />
                                        {activeList.map(
                                            ({ name, icon, path }) => {
                                                return (
                                                    <Active key={name}>
                                                        <Icon
                                                            src={icon}
                                                            alt="Not found..."
                                                        />
                                                        <Link to={path}>
                                                            {name}
                                                        </Link>
                                                    </Active>
                                                );
                                            }
                                        )}
                                    </ActiveList>
                                </ActiveType>
                            );
                        })}
                    </ActiveTypeList>
                </Content>
            </Container>
        </>
    );
};

export default Home;

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;

    background: no-repeat;
    background-size: cover;
    position: absolute;
    background-image: url(${titlePage});
`;

const Content = styled.div``;

const Title = styled.h1`
    margin-bottom: 20px;
    color: white;
    font-size: 40px;
    font-weight: 900;
    text-align: center;
`;

const ActiveTypeList = styled.ul`
    display: flex;
`;

const ActiveType = styled.li`
    position: relative;
    span {
        font-size: 20px;
        font-weight: 700;
        display: block;
        padding: 10px;
        color: #fff;
        transition: 0.3s;
        padding: 15px 25px;
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
const Icon = styled.img`
    width: 30px;
    height: 30px;
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
