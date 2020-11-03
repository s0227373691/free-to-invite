import React from 'react';
import styled from 'styled-components';

const NewArticle = () => {
    return (
        <Container>
            <Form action="">
                <Upperlock>
                    <Select required>
                        <option value="" hidden>
                            請選擇分類
                        </option>
                        <option value="1">休閒</option>
                        <option value="2">運動</option>
                        <option value="3">旅遊</option>
                    </Select>
                    <label htmlFor="date">活動日期</label>
                    <input id="date" type="text"></input>
                    <label htmlFor="people">人數</label>
                    <input id="people" type="number" placeholder="人數" />
                </Upperlock>
                <LowerBlock>
                    <input type="text" placeholder="標題" />
                    <textarea name="" id="" cols="50" rows="20"></textarea>
                </LowerBlock>
                <SendBtn>送出</SendBtn>
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
