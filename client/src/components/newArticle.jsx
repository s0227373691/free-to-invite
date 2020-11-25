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
            <Form onSubmit={handleSubmit}>
                <Title className="title">新增文章</Title>{' '}
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
                {/* <Footer>
                    <SendBtn type="submit">送出</SendBtn>{' '}
                </Footer> */}
            </Form>
        </Container>
    );
};
export default NewArticle;
const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow-y: scroll;
    background: red;
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
    max-width: 800px;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0 10px;
    background: blue;
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
    input[type='text'] {
        margin-bottom: 16px;
    }
`;
const TextAreaBox = styled.div`
    position: relative;
    background: red;
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
    resize: none;
    /* overflow-wrap: break-word; */
    background: yellow;
    overflow-y: hidden;
    font: inherit;

    &:focus {
        outline: none;
    }
`;
const Footer = styled.footer`
    width: 100%;
    height: 60px;
    position: absolute;
    bottom: 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
const SendBtn = styled(Button)`
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #b2bec3;
`;
