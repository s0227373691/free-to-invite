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
            <List2>
                <Tabs>
                    <Tab onClick={handleClick} active={active === 0} id={0}>
                        關於
                    </Tab>
                    <Tab onClick={handleClick} active={active === 1} id={1}>
                        興趣
                    </Tab>
                    <Tab onClick={handleClick} active={active === 2} id={2}>
                        社群連結
                    </Tab>
                </Tabs>
                <Tabs2>
                    <Content active={active === 0}>
                        <ul>
                            <li>
                                <form>
                                    來自:
                                    <input type="text" name="欄位名稱" />
                                </form>
                            </li>
                            <li>
                                <form>
                                    經常出沒:
                                    <input type="text" name="欄位名稱" />
                                </form>
                            </li>
                            <li>
                                <form>
                                    工作領與(職業):
                                    <input type="text" name="欄位名稱" />
                                </form>
                            </li>
                        </ul>
                    </Content>
                    <Content active={active === 1}>
                        <ul>
                            <li>
                                <form>
                                    喜歡的運動:
                                    <input type="text" name="欄位名稱" />
                                </form>
                            </li>

                            <li>
                                <form>
                                    喜歡的桌遊:
                                    <input type="text" name="欄位名稱" />
                                </form>
                            </li>
                        </ul>
                    </Content>
                    <Content active={active === 2}>
                        <ul>
                            <li>
                                <form>
                                    社群連結:
                                    <input type="text" name="欄位名稱" />
                                </form>
                            </li>
                            <li>
                                <form>
                                    E-mail:
                                    <input type="text" name="欄位名稱" />
                                </form>
                            </li>
                        </ul>
                    </Content>
                </Tabs2>
            </List2>
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

const List2 = styled.div`
    /* background-color: #ffffff; */
    border-bottom: 1px solid black;
    padding: 20px 0px 20px 0px;
    font-size: inherit;
    text-align: center;
    margin: 0px 200px 0px 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Tabs = styled.div`
    background: #ffffff;
    font-family: Open Sans;
    overflow: hidden;

    align-items: center;
    justify-content: center;
`;

const Tabs2 = styled.div`
    background: #fff;
    font-family: Open Sans;
    margin-left: 50px;
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
    border: 1px solid #ffffff;
    display: flex;
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

const Content = styled.div`
    background-color: #ffffff;
    margin: 0px;
    li {
        display: flex;
        flex-direction: column;
        padding-top: 10px;
    }
    input {
        border-style: 1px;
        border-bottom-style: solid;
        border-top-style: none;
        border-left-style: none;
        border-right-style: none;
    }

    ${(props) => (props.active ? '' : 'display:none')}
`;

// import React, { useState } from 'react';
// import styled from 'styled-components';
// import ReactDOM from 'react-dom';

// const Member = (props) => {
//     return <Container></Container>;
// };
// export default Member;

// const Container = styled.div`
//     width: 100%;

//     position: absolute;

//     background-color: #ffffff;
// `;
