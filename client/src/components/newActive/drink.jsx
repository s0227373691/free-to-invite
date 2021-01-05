import React, { useState } from 'react';
import styled from 'styled-components';

import dateFormat from 'dateformat';

import { ButtonClearDefault } from '../styles/buttons';
import { TextareaClearDefault } from '../styles/textarea';
import { InputClearDefault } from '../styles/inputs';

import { postNewActiveDrink } from '../../lib/api/newActive/drink';

import IconPrice from '../../assets/svg/price';
import IconCalendar from '../../assets/svg/calendar';
import IconTitle from '../../assets/svg/title';
import IconPlace from '../../assets/svg/place';
import IconPopulation from '../../assets/svg/population';
import IconEeighteenPlus from '../../assets/svg/eighteenPlus.svg';
import IconAlcohol from '../../assets/svg/alcohol.svg';

const Drink = (props) => {
    const now = dateFormat(new Date(), `yyyy-mm-dd'T'HH:MM`);
    const [startDate, setStartDate] = useState(now);
    const [endDate, setEndDate] = useState(now);
    const [title, setTitle] = useState('');
    const [population, setPopulation] = useState('');
    const [cost, setCost] = useState('');
    const [content, setContent] = useState('');
    const [place, setPlace] = useState('');

    const [liqueurPrice, setLiqueurPrice] = useState('');
    const [age, setAge] = useState('');
    const [acceptSex, setAcceptSex] = useState('');

    const handleChangeStartDate = (e) => {
        const inputValue = e.target.value;
        setStartDate(inputValue);
        if (inputValue > endDate) setEndDate(inputValue);
    };

    const handleChangeEndDate = (e) => {
        const inputValue = e.target.value;
        setEndDate(inputValue);
        if (inputValue < startDate) setStartDate(inputValue);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postNewActiveDrink({
            activeType: props.activeType,
            startDate,
            endDate,
            title,
            population,
            cost,
            place,
            content,
            liqueurPrice,
            age,
            acceptSex,
        });
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                <Icon src={IconCalendar} />
                <DateRange>
                    <div>
                        <span>活動開始</span>
                        <InputDate
                            type="datetime-local"
                            min={now}
                            value={startDate}
                            onChange={handleChangeStartDate}
                            required
                        />
                    </div>
                    <div>
                        <span>活動結束</span>
                        <InputDate
                            type="datetime-local"
                            min={now}
                            value={endDate}
                            onChange={handleChangeEndDate}
                            required
                        />
                    </div>
                </DateRange>
            </Label>
            <Label htmlFor="title">
                <Icon src={IconTitle} />
                <Input
                    id="title"
                    type="text"
                    placeholder="標題"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
            </Label>
            <Label htmlFor="population">
                <Icon src={IconPopulation} />
                <Input
                    id="population"
                    placeholder="人數"
                    type="number"
                    onChange={(e) => setPopulation(e.target.value)}
                    value={population}
                />
            </Label>
            <Label htmlFor="price">
                <Icon src={IconPrice} />
                <Input
                    id="price"
                    placeholder="參加費用"
                    type="number"
                    onChange={(e) => setCost(e.target.value)}
                    value={cost}
                />
            </Label>
            <Label htmlFor="place">
                <Icon src={IconPlace} />
                <Input
                    id="place"
                    type="text"
                    placeholder="地點"
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                />
            </Label>
            <Label htmlFor="liqueurPrice">
                <Icon src={IconAlcohol} />
                <Input
                    id="liqueurPrice"
                    type="text"
                    placeholder="酒類金額"
                    onChange={(e) => setLiqueurPrice(e.target.value)}
                    value={liqueurPrice}
                />
            </Label>

            <Label htmlFor="age">
                <Icon src={IconEeighteenPlus} />
                <Input
                    id="age"
                    type="text"
                    placeholder="最低年齡"
                    onChange={(e) => setAge(e.target.value)}
                    value={age}
                />
            </Label>
            <RadioGroup>
                <Label>
                    <LabelText>接受性別</LabelText>
                    <RadioWrap>
                        <span>男</span>
                        <Radio
                            type="radio"
                            name="acceptSex"
                            value="男"
                            onChange={(e) => setAcceptSex(e.target.value)}
                        />
                    </RadioWrap>
                    <RadioWrap>
                        <span>女</span>
                        <Radio
                            type="radio"
                            name="acceptSex"
                            value="女"
                            onChange={(e) => setAcceptSex(e.target.value)}
                        />
                    </RadioWrap>
                    <RadioWrap>
                        <span>男女皆可</span>
                        <Radio
                            type="radio"
                            name="acceptSex"
                            value="男女皆可"
                            onChange={(e) => setAcceptSex(e.target.value)}
                        />
                    </RadioWrap>
                </Label>
            </RadioGroup>
            <TextArea
                placeholder="補充說明..."
                onChange={(e) => setContent(e.target.value)}
                value={content}
            ></TextArea>
            <Button type="submit">新增</Button>
        </Form>
    );
};

const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;
const Label = styled.label`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;

const Icon = styled.img`
    width: 40px;
`;

const DateRange = styled.div`
    margin: 0 30px;
`;

const InputDate = styled(InputClearDefault)`
    width: auto;
    margin: 0 30px;
    padding: 10px 0;
    border: 0px solid #dadce0;
    font-size: 23px;
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
const RadioGroup = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
`;
const LabelText = styled.div`
    font-size: 25px;
`;
const Radio = styled.input``;
const RadioWrap = styled.div`
    margin: 0 5px;
`;
export default Drink;
