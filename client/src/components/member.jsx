import React from 'react';
import styled from 'styled-components';

const Member = () => {
    return (
        //TODO 名字,自介,常見揪團類別,
        <Container>
            <Backgroundicture>
                <Profilepicture />
            </Backgroundicture>
            <List>
                <img src="https://fakeimg.pl/350x200/?text=Hello"></img>
            </List>
            <List2>
                <ul>
                    <li>
                        <About href="#">關於</About>
                    </li>
                    <li>
                        <About href="#">發起活動</About>
                    </li>
                    <li>
                        <About href="#">參與活動</About>
                    </li>
                </ul>
            </List2>
            <List3>
                <div>
                    <ul>
                        <li>興趣</li>
                        <li>所在地</li>
                        <li>社群連結</li>
                    </ul>
                </div>
                <div></div>
                <div></div>
            </List3>
        </Container>
    );
};

export default Member;

const Container = styled.div`
    width: 100%;
    background-color: #ffffff;
`;
const Backgroundicture = styled.div`
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

    border-top: solid rgba(0, 0, 0, 0.2) 1px;
    font-size: inherit;
`;

const List2 = styled.div`
    height: 85px;
    background-color: #ffffff;
    border-top: solid rgba(0, 0, 0, 0.2) 1px;
    font-size: inherit;
    ul {
        display: flex;
        padding-top: 10px;
    }
`;

const About = styled.div`
    padding: 10px 20px;
    border: 1px solid #ccc;
    margin-right: 3px;
    cursor: pointer;
`;

const List3 = styled.div``;
