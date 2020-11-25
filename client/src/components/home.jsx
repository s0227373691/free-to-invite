import React, { useState } from 'react';
import styled from 'styled-components';

import titlePage from '../assets/img/title-page';
import Register from './register';

import { ButtonClearDefault } from './styles/buttons';

const Home = () => {
    const [register, setRegister] = useState(false);
    return (
        <>
            <Container style={{ backgroundImage: `url(${titlePage})` }}>
                <Content>
                    <Title>與朋友聚會</Title>
                    <BtnRegister onClick={() => setRegister(true)}>
                        立即加入
                    </BtnRegister>
                </Content>
            </Container>
            <Register register={register} setRegister={setRegister} />
        </>
    );
};

export default Home;

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0.8;
    background: no-repeat;
    background-size: cover;
`;

const Content = styled.div`
    position: absolute;
`;

const Title = styled.h1`
    margin-bottom: 20px;
    color: white;
    font-size: 40px;
`;

const BtnRegister = styled(ButtonClearDefault)`
    color: white;
    padding: 10px 40px;
    font-size: 23px;
    background-color: #629dd1;
    border-radius: 10px;

    &:hover {
        background-color: #76a9d7;
    }
`;
