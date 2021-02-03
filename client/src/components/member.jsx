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
                        <About
                            href="#"
                            className="header-item active tab-trigger"
                        >
                            關於
                        </About>
                    </li>
                    <li>
                        <About href="#" className="header-item tab-trigger">
                            發起活動
                        </About>
                    </li>
                    <li>
                        <About href="#" className="header-item tab-trigger">
                            參與活動
                        </About>
                    </li>
                </ul>
            </List2>
            <List3>
                <div className="content-item active tab-content">
                    <ul>
                        <li>興趣</li>
                        <li>所在地</li>
                        <li>社群連結</li>
                    </ul>
                </div>
                <div className="content-item tab-content">Текст 2</div>
                <div className="content-item tab-content">Текст 3</div>
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
    /* height: 100px; */
    border-top: solid rgba(0, 0, 0, 0.2) 1px;
    font-size: inherit;
`;

// const Bio = styled.input``;

const List2 = styled.div`
    height: 85px;
    background-color: #ffffff;
    border-top: solid rgba(0, 0, 0, 0.2) 1px;
    font-size: inherit;
    ul {
        display: flex;
        padding-top: 10px;

        .header-item.active {
            border: 1px solid transparent;
            border-width: 0 0 6px 0;
            border-image: linear-gradient(to right, #eef2f3, #8e9eab);
            border-image-slice: 1;
        }
    }
`;

const About = styled.div`
    padding: 10px 20px;
    border: 1px solid #ccc;
    margin-right: 3px;
    cursor: pointer;
`;

const List3 = styled.div`
    background: #8e9eab;
    /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #eef2f3, #8e9eab);
    /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #eef2f3, #8e9eab);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

    .content-item {
        /* display: none; */
        border: 1px solid #ccc;
        padding-bottom: 50px;
    }
`;
