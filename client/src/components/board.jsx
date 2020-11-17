import React from 'react';
import styled from 'styled-components';

const Board = () => {
    return (
        <Container>
            <TopBar></TopBar>
            <ArticleFrame>
                <Article>
                    <div className="user">Cheery．xx看板</div>
                    <div className="content">
                        <h2>標題標題標題標題標題</h2>
                        <p>
                            文章文章文章文章文章文章文章文章文章文章文章文章章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章
                        </p>
                    </div>
                    <div className="status">
                        <div className="date">活動日期 : 2020-12-26</div>
                        <div className="bar"></div>
                        <div className="people">人數限制 : 10-20</div>
                    </div>
                </Article>
                <Article>
                    <div className="user">Cheery．xx看板</div>
                    <div className="content">
                        <h2>標題標題標題標題標題</h2>
                        <p>
                            文章文章文章文章文章文章文章文章文章文章文章文章章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章
                        </p>
                    </div>
                    <div className="status">
                        <div className="date">活動日期 : 2020-12-26</div>
                        <div className="bar"></div>
                        <div className="people">人數限制 : 10-20</div>
                    </div>
                </Article>
            </ArticleFrame>
        </Container>
    );
};

const Container = styled.div`
    max-width: 800px;
    padding: 0 50px;
    display: flex;
    flex-direction: column;
`;
const TopBar = styled.div`
    width: 100%;
    height: 100px;
    background: red;
`;
const ArticleFrame = styled.ul`
    width: 100%;
    padding: 20px;
    margin: 0 auto;

    display: flex;
    flex-direction: column;
    border: 1px solid black;
`;

const Article = styled.li`
    width: 100%;
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgb(0, 0, 0, 0.3);
    padding: 10px 0;
    .user {
    }
    .content {
        max-width: 900px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
            font-size: 18px;
            font-weight: 700;
        }
        p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
    .status {
        display: flex;
        align-items: center;
        .bar {
            width: 2px;
            height: 70%;
            background: rgba(0, 0, 0, 0.35);
            border-radius: 10px;
            margin: 0 8px;
        }
    }
`;
export default Board;
