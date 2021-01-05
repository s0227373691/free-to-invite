import React from 'react';
import styled from 'styled-components';

const Member = () => {
    return (
        //TODO 名字,自介,常見揪團類別,
        <Container>
            <Backgroundicture>
                <Profilepicture />
            </Backgroundicture>
            <List></List>
            <List2>
                <About href="/user/about/:userId">About</About>
                <About href="">About</About>
                <About href="">About</About>
                <button onClick="aaa(userId)"></button>
            </List2>
        </Container>
    );
};

export default Member;

const Container = styled.div`
    width: 100%;
    background-color: #ffffff;
`;
const Backgroundicture = styled.div`
    max-width: 1140px;
    background-color: rgba(130, 119, 119, 0.1);
    padding-top: 45px;
    padding-bottom: 10px;
`;

const Profilepicture = styled.div`
    width: 134px;
    height: 134px;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0.08);
    margin-left: 25px;
    display: flex;
`;

const List = styled.div`
    background-color: #ffffff;
    padding-left: 30px;
    height: 85px;
    border-top: solid rgba(0, 0, 0, 0.2) 1px;
    font-size: inherit;
`;

// const Bio = styled.input``;

const List2 = styled.div`
    background-color: #ffffff;
    border-top: solid rgba(0, 0, 0, 0.2) 1px;
    font-size: inherit;
`;

const About = styled.a`
    padding: 0px 15px 0px 30px;
    color: black;
`;
