import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';

const NewArticle = () => {
    const [board, setBoard] = useState('');
    const [date, setDate] = useState('');
    const [people, setPeople] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = (e) => {
        Axios.post('http://localhost:3000/api/newarticle', {
            board: 'testboard',
            date: 'testdate',
            people: 5,
            title: 'testtitle',
            content: 'tsetcontent',
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
                <Upperlock>
                    <Select required onChange={(e) => setBoard(e.target.value)}>
                        <option value="" hidden>
                            請選擇分類
                        </option>
                        <option value="休閒">休閒</option>
                        <option value="運動">運動</option>
                        <option value="旅遊">旅遊</option>
                    </Select>
                    <label htmlFor="date"></label>
                    <input
                        id="date"
                        type="text"
                        onChange={(e) => setDate(e.target.value)}
                    ></input>
                    <label htmlFor="people"></label>
                    <input
                        id="people"
                        type="number"
                        placeholder="人數"
                        onChange={(e) => setPeople(e.target.value)}
                    />
                </Upperlock>
                <LowerBlock>
                    <input
                        type="text"
                        placeholder="標題"
                        onChange={(e) => setTitle(e.target.value)}
                    />
                    <textarea
                        name=""
                        id=""
                        cols="50"
                        rows="20"
                        onChange={(e) => setContent(e.target.value)}
                    ></textarea>
                </LowerBlock>
                <SendBtn type="submit">送出</SendBtn>
            </Form>
        </Container>
    );
};

export default NewArticle;

const Container = styled.div``;
const Form = styled.form``;
const Upperlock = styled.div`
    input[type='date'] {
        width: 200px;
    }
    input[type='text'] {
    }
`;

const Select = styled.select`
    margin: 20px;
    padding: 10px;
    text-align: center;
    border-radius: 5px;
    &:focus {
        outline: none;
    }
    option {
        width: 100%;
        height: 100%;
        text-align: center;
        padding: 0;
        margin: 0 auto;
    }
    input[type='text'] {
    }
`;
const LowerBlock = styled.div`
    display: flex;
    flex-direction: column;
`;

const SendBtn = styled.button``;
