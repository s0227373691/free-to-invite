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
                    <input id="date" type="date"></input>
                    <input type="text" placeholder="人數" />
                </Upperlock>
                <LowerBlock>
                    <input type="text" placeholder="標題" />
                    <textarea name="" id="" cols="50" rows="20"></textarea>
                </LowerBlock>
            </Form>
        </Container>
    );
};

export default NewArticle;

const Container = styled.div``;
const Form = styled.form``;
const Upperlock = styled.div``;
const LowerBlock = styled.div`
    display: flex;
    flex-direction: column;
`;
const Select = styled.select``;
