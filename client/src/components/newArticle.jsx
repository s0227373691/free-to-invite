import React from 'react';
import styled from 'styled-components';

const NewArticle = () => {
    return (
        <Container>
            <select required>
                <option value="" hidden>
                    請選擇分類
                </option>
                <option value="1">Option 1</option>
                <option value="2">Option 2</option>
                <option value="3">Option 3</option>
                <option value="4">Option 4</option>
                <option value="5">Option 5</option>
            </select>
            <input id="date" type="date"></input>
            <input type="text" placeholder="人數" />
            <input type="text" placeholder="標題" />
            <textarea name="" id="" cols="30" rows="10"></textarea>
        </Container>
    );
};

export default NewArticle;

const Container = styled.div``;
