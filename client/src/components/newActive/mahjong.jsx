import React, { useState } from 'react';
import styled from 'styled-components';

import dateFormat from 'dateformat';

import { ButtonClearDefault } from '../styles/buttons';
import { TextareaClearDefault } from '../styles/textarea';
import { InputClearDefault } from '../styles/inputs';

import { postNewActiveMahjong } from '../../lib/api/newActive/mahjong';

import IconPrice from '../../assets/svg/price';
import IconCalendar from '../../assets/svg/calendar';
import IconTitle from '../../assets/svg/title';
import IconPlace from '../../assets/svg/place';
import IconPopulation from '../../assets/svg/population';

//TODO 抽菸不抽菸
//TODO 最低最高金額
//TODO 供餐 飲料
//TODO 電動桌
//TODO  將數 (考慮)

const Mahjong = (props) => {
    const now = dateFormat(new Date(), `yyyy-mm-dd'T'HH:MM`);
    const [startDate, setStartDate] = useState(now);
    const [endDate, setEndDate] = useState(now);
    const [title, setTitle] = useState('');
    const [population, setPopulation] = useState('');
    const [minCost, setMinCost] = useState('');
    const [maxCost, setMaxCost] = useState('');
    const [content, setContent] = useState('');
    const [place, setPlace] = useState('');

    const [smoking, setSmoking] = useState('');
    const [offerFood, setOfferFood] = useState('');
    const [offerDrink, setOfferDrink] = useState('');
    const [electricTable, setElectricTable] = useState('');

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

        await postNewActiveMahjong({
            activeType: props.activeType,
            startDate,
            endDate,
            title,
            population,
            minCost,
            maxCost,
            place,
            content,
            smoking,
            offerFood,
            offerDrink,
            electricTable,
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
            <Label htmlFor="minCost">
                <Icon src={IconPrice} />
                <Input
                    id="minCost"
                    placeholder="最低賭注"
                    type="number"
                    onChange={(e) => setMinCost(e.target.value)}
                    value={minCost}
                />
            </Label>

            <Label htmlFor="maxCost">
                <Icon src={IconPrice} />
                <Input
                    id="maxCost"
                    placeholder="最高賭注"
                    type="number"
                    onChange={(e) => setMaxCost(e.target.value)}
                    value={maxCost}
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
            <RadioGroup>
                <Label>
                    <LabelText>抽菸</LabelText>
                    <RadioWrap>
                        <span>是</span>
                        <Radio
                            type="radio"
                            name="smoking"
                            value="是"
                            onChange={(e) => setSmoking(e.target.value)}
                        />
                    </RadioWrap>
                    <RadioWrap>
                        <span>否</span>
                        <Radio
                            type="radio"
                            name="smoking"
                            value="否"
                            onChange={(e) => setSmoking(e.target.value)}
                        />
                    </RadioWrap>
                </Label>
                <Label>
                    <LabelText>供餐</LabelText>
                    <RadioWrap>
                        <span>是</span>
                        <Radio
                            type="radio"
                            name="offerFood"
                            value="是"
                            onChange={(e) => setOfferFood(e.target.value)}
                        />
                    </RadioWrap>
                    <RadioWrap>
                        <span>否</span>
                        <Radio
                            type="radio"
                            name="offerFood"
                            value="否"
                            onChange={(e) => setOfferFood(e.target.value)}
                        />
                    </RadioWrap>
                </Label>
                <Label>
                    <LabelText>飲料</LabelText>
                    <RadioWrap>
                        <span>是</span>
                        <Radio
                            type="radio"
                            name="offerDrink"
                            value="是"
                            onChange={(e) => setOfferDrink(e.target.value)}
                        />
                    </RadioWrap>
                    <RadioWrap>
                        <span>否</span>
                        <Radio
                            type="radio"
                            name="offerDrink"
                            value="否"
                            onChange={(e) => setOfferDrink(e.target.value)}
                        />
                    </RadioWrap>
                </Label>
                <Label>
                    <LabelText>電動桌</LabelText>
                    <RadioWrap>
                        <span>是</span>
                        <Radio
                            type="radio"
                            name="electricTable"
                            value="是"
                            onChange={(e) => setElectricTable(e.target.value)}
                        />
                    </RadioWrap>
                    <RadioWrap>
                        <span>否</span>
                        <Radio
                            type="radio"
                            name="electricTable"
                            value="否"
                            onChange={(e) => setElectricTable(e.target.value)}
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
const RadioGroup = styled.div`
    display: flex;
    justify-content: space-between;
    height: 50px;
`;
const LabelText = styled.div`
    font-size: 30px;
`;
const Radio = styled.input``;
const RadioWrap = styled.div`
    margin: 0 5px;
`;
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

export default Mahjong;
