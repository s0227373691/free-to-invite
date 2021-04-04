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

    const [active1, setActive1] = useState(0);
    const handleClick1 = (e) => {
        const index = parseInt(e.target.id, 0);
        if (index !== active1) {
            setActive1(index);
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
            <Tabs2>
                <Content active={active === 0}>
                    <ul>
                        <Tab2
                            onClick={handleClick1}
                            active={active === 0}
                            id={0}
                        >
                            興趣
                        </Tab2>
                        <Tab2
                            onClick={handleClick1}
                            active={active === 1}
                            id={1}
                        >
                            所在地
                        </Tab2>
                        <Tab2>社群連結</Tab2>
                    </ul>
                </Content>
                <Content active={active === 1}>
                    <ul>
                        <h1>Content 2</h1>
                    </ul>
                </Content>
                <Content active={active === 2}>
                    <ul>
                        <h1>Content 3</h1>
                    </ul>
                </Content>
                <Content2 active1={active1 === 0}>
                    <ul>
                        <h1>Content 1</h1>
                    </ul>
                </Content2>
                <Content2 active1={active1 === 1}>
                    <ul>
                        <h1>Content 2</h1>
                    </ul>
                </Content2>
            </Tabs2>
        </Container>
    );
}
export default Member;

const Container = styled.div`
    width: 100%;
    position: absolute;
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
    margin: 0px 200px 0px 200px;
`;

const Tabs = styled.div`
    background: #fff;
    font-family: Open Sans;
    overflow: hidden;
    height: 3em;
    margin-left: 200px;
`;

const Tabs2 = styled.div`
    background: #fff;
    font-family: Open Sans;
    overflow: hidden;
    display: flex;
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
    margin-right: 5px;
    font-size: 1em;
    :hover {
        background-color: white;
    }
`;

const Tab2 = styled.button`
    border: 1px solid #ccc;
    border: none;
    outline: none;
    cursor: pointer;
    width: 100px;
    padding: 10px;
    margin-bottom: 5px;
    font-size: 1em;
    :hover {
        background-color: white;
    }
`;

const Content = styled.div`
    width: 230px;
    height: 200px;
    margin-left: 200px;
    border: 2px solid black;
    border-radius: 0.3rem;
    ul {
        display: flex;
        flex-direction: column;
    }

    ${(props) => (props.active ? '' : 'display:none')}
`;

const Content2 = styled.div`
    width: 400px;
    background-color: #afa1a1;
    ${(props) => (props.active1 ? '' : 'display:none')}
`;
