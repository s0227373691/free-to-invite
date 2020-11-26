import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Button from './commom/baseTag/button';
import BaseInput from './commom/baseTag/Input';
const NewArticle = () => {
    const [board, setBoard] = useState('');
    const [date, setDate] = useState('');
    const [people, setPeople] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        Axios.post('http://localhost:3000/api/newarticle', {
            board,
            date,
            people,
            title,
            content,
        })
            .then((res) => {
                alert('上傳成功');
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return (
        <Container>
            <Title className="title">新增文章</Title>{' '}
            <Form onSubmit={handleSubmit}>
                <Upperlock>
                    <Select required onChange={(e) => setBoard(e.target.value)}>
                        <option value="" hidden>
                            請選擇分類
                        </option>
                        <option value="休閒">休閒</option>{' '}
                        <option value="運動">運動</option>{' '}
                        <option value="旅遊">旅遊</option>{' '}
                    </Select>
                    <Label htmlFor="date">
                        <Span>日期 : </Span>
                        <Input
                            id="date"
                            type="text"
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </Label>
                    <Label htmlFor="people">
                        <Span>人數 : </Span>
                        <Input
                            id="people"
                            type="number"
                            onChange={(e) => setPeople(e.target.value)}
                        />
                    </Label>
                </Upperlock>
                <LowerBlock>
                    <Input
                        type="text"
                        placeholder="標題"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <TextAreaBox>
                        <Dummy>{content}</Dummy>
                        <TextArea
                            name=""
                            id=""
                            onChange={(e) => setContent(e.target.value)}
                        ></TextArea>
                    </TextAreaBox>
                </LowerBlock>
                <Footer>
                    <button className="btnCancel">取消</button>
                    <button className="btnNext">下一步</button>
                </Footer>
                {/* <Footer>
                    <SendBtn type="submit">送出</SendBtn>{' '}
                </Footer> */}
            </Form>
        </Container>
    );
};
export default NewArticle;
const Container = styled.div`
    max-width: 800px;
    min-height: calc(100vh - 80px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h2`
    font-size: 28px;
    padding: 20px 0;
    text-align: center;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    font-weight: 700;
`;
const Form = styled.form`
    height: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    position: relative;
    padding: 0 10px;
`;
const Upperlock = styled.div`
    display: flex;
    justify-content: space-around;
    margin-bottom: 16px;
`;
const Select = styled.select`
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    border: 1px solid #dadce0;
    &:focus {
        outline: none;
    }
`;
const Input = styled(BaseInput)`
    height: 40px;
    border: 1px solid #dadce0;
`;
const Label = styled.label`
    display: flex;
    flex-grow: 1;
    white-space: nowrap;
    align-items: center;
`;
const Span = styled.span`
    margin: 0 10px;
`;

const LowerBlock = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    input[type='text'] {
        margin-bottom: 16px;
    }
`;
const TextAreaBox = styled.div`
    position: relative;
    background: red;
    flex-grow: 1;
`;
const Dummy = styled.div`
    padding: 2px;
    border: 1px solid;
    visibility: hidden;
    white-space: pre-wrap;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    &:after {
        content: ' ';
    }
`;
const TextArea = styled.textarea`
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: none;
    resize: none;
    border: 1px solid #dadce0;
    /* overflow-wrap: break-word; */

    overflow-y: hidden;
    font: inherit;

    &:focus {
        outline: none;
    }
`;

const SendBtn = styled(Button)`
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #b2bec3;
`;

const Footer = styled.footer`
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: sticky;
    right: 0;
    left: 0;
    bottom: 0;

    button {
        height: 44px;
        padding: 0 8px;
        border-radius: 5px;
        &:hover {
            background: rgb(90, 176, 219);
        }
    }
    .btnNext {
        margin-left: 16px;
    }
`;
