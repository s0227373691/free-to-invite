import React, { useState } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

function Member() {
    const [active, setActive] = useState(0);
    const handleClick = (e) => {
        const index = parseInt(e.target.id, 0);
        if (index !== active) {
            setActive(index);
        }
    };
    return (
        <Container>
            <Backgroundicture>
                <img src="http://fakeimg.pl/250x150/282828/EAE0D0/"></img>
            </Backgroundicture>
            <List>
                <About href="#">新增個人簡介</About>
            </List>
            <Tabs>
                <Tab onClick={handleClick} active={active === 0} id={0}>
                    關於
                </Tab>
                <Tab onClick={handleClick} active={active === 1} id={1}>
                    發起活動
                </Tab>
                <Tab onClick={handleClick} active={active === 2} id={2}>
                    參與活動
                </Tab>
            </Tabs>

            <Content active={active === 0}>
                <ul>
                    <h1>興趣</h1>
                    <h1>所在地</h1>
                    <h1>社群連結</h1>
                </ul>
            </Content>
            <Content active={active === 1}>
                <h1>Content 2</h1>
            </Content>
            <Content active={active === 2}>
                <h1>Content 3</h1>
            </Content>
        </Container>
    );
}
export default Member;

const Container = styled.div`
    width: 100%;
    background-color: #ffffff;
`;

const Backgroundicture = styled.div`
    background-color: rgba(130, 119, 119, 0.1);
    padding-top: 45px;
    padding-bottom: 10px;
    display: flex;
    justify-content: center;
`;

const List = styled.div`
    /* background-color: #ffffff; */
    border-bottom: 1px solid black;
    padding: 20px 0px 20px 0px;
    font-size: inherit;
    text-align: center;
    margin: 0px 100px 0px 100px;
`;

const Tabs = styled.div`
    overflow: hidden;
    background: #fff;
    font-family: Open Sans;
    height: 3em;
    text-align: center;
`;

const About = styled.button`
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    font-size: 1em;
`;
const Tab = styled.button`
    border: 1px solid #ccc;
    border: none;
    outline: none;
    cursor: pointer;
    position: relative;
    padding: 10px;
    margin-right: 2px;
    font-size: 1em;
    :hover {
        background-color: white;
    }
`;
export const Content = styled.div`
    ${(props) => (props.active ? '' : 'display:none')}
`;
