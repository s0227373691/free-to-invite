import React from 'react';
import styled from 'styled-components';

import { ButtonClearDefault } from '../styles/buttons';
import { TextareaClearDefault } from '../styles/textarea';
import { InputClearDefault } from '../styles/inputs';

import IconPrice from '../../assets/svg/price';
import IconCalendar from '../../assets/svg/calendar';
import IconTitle from '../../assets/svg/title';
import IconPlace from '../../assets/svg/place';
import IconPopulation from '../../assets/svg/population';

const Movie = () => {
    return (
        <Form>
            <Label>
                <Icon src={IconCalendar} />
                <Input type="datetime-local" required />
            </Label>
            <Label htmlFor="title">
                <Icon src={IconTitle} />
                <Input id="title" type="text" placeholder="標題" />
            </Label>
            <Label htmlFor="place">
                <Icon src={IconPlace} />
                <Input id="place" type="text" placeholder="地點" />
            </Label>

            <Label htmlFor="population">
                <Icon src={IconPopulation} />
                <Input id="population" placeholder="人數" type="number" />
            </Label>
            <Label htmlFor="price">
                <Icon src={IconPrice} />
                <Input id="price" placeholder="參加費用" type="number" />
            </Label>

            <TextArea placeholder="補充說明..."></TextArea>
            <Button type="submit">新增</Button>
        </Form>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const Input = styled(InputClearDefault)`
    margin: 0 30px;
    padding: 15px 0;
    border: 0px solid #dadce0;
    font-size: 25px;
`;

const TextArea = styled(TextareaClearDefault)`
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    font-size: 20px;
    border: 0px;
`;
const Button = styled(ButtonClearDefault)`
    width: 80px;
    margin-left: auto;
    padding: 10px 15px;
    border-radius: 5px;
    color: white;
    background: rgb(14, 145, 210);
    font-size: 15px;

    &:hover {
        background: rgb(90, 176, 219);
    }
    &:active {
        background: rgb(14, 145, 210);
    }
`;

const Label = styled.label`
    display: flex;
    margin-bottom: 20px;
`;

const Icon = styled.img`
    width: 40px;
`;

export default Movie;
