import React from 'react';
import styled from 'styled-components';

const myArticle = () => {
    return (
        <Container>
            <p className="title">我的文章</p>
            <ArticleFrame>
                <Article>
                    <div className="user">Cheery．xx看板</div>
                    <div className="content">
                        <h2>標題標題標題標題標題</h2>
                        <p>
                            文章文章文章文章文章文章文章文章文章文章文章文章章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章文章
                        </p>
                    </div>
                    <div className="status">123</div>
                </Article>
            </ArticleFrame>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    height: calc(100vh - 80px);
    padding: 0 50px;
    display: flex;
    flex-direction: column;

    .title {
        font-size: 28px;
        padding: 20px 0;
        text-align: center;
        border-bottom: 1px solid black;
        margin-bottom: 20px;
    }
`;

const ArticleFrame = styled.div`
    width: 100%;
    padding: 20px;
    margin: 0 auto;
    border-bottom: 1px solid rgb(233, 233, 233);
    display: flex;
    border: 1px solid black;
    &:hover {
        cursor: pointer;
        color: red;
    }
    .container {
    }
`;

const Article = styled.article`
    width: 100%;
    height: 116px;
    display: flex;
    flex-direction: column;

    align-content: center;
    .user {
    }
    .content {
        max-width: 900px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        h2 {
            font-size: 20px;
        }
        p {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }
    }
`;
export default myArticle;
