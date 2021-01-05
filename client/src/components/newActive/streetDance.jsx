import React, { useState } from 'react';
import styled from 'styled-components';

import dateFormat from 'dateformat';
import { postNewActiveStreetDance } from '../../lib/api/newActive/streetDance';

import { ButtonClearDefault } from '../styles/buttons';
import { TextareaClearDefault } from '../styles/textarea';
import { InputClearDefault } from '../styles/inputs';

import IconPrice from '../../assets/svg/price';
import IconCalendar from '../../assets/svg/calendar';
import IconTitle from '../../assets/svg/title';
import IconPlace from '../../assets/svg/place';
import IconPopulation from '../../assets/svg/population';

const Mahjong = (props) => {
    const now = dateFormat(new Date(), `yyyy-mm-dd'T'HH:MM`);
    const [startDate, setStartDate] = useState(now);
    const [endDate, setEndDate] = useState(now);
    const [title, setTitle] = useState('');
    const [population, setPopulation] = useState('');
    const [cost, setCost] = useState('');
    const [content, setContent] = useState('');
    const [place, setPlace] = useState('');

    const [site, setSite] = useState('');
    const [addedLevelTypeList, setAddedLevelTypeList] = useState([]);
    const streetDanceLevel = [
        { type: '初學' },
        { type: '基礎' },
        { type: '休閒' },
        { type: '老手' },
        { type: '新手' },
    ];

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
        console.log(
            props.activeType,
            startDate,
            endDate,
            title,
            population,
            cost,
            place,
            content,
            site,
            addedLevelTypeList
        );
        await postNewActiveStreetDance({
            activeType: props.activeType,
            startDate,
            endDate,
            title,
            population,
            cost,
            place,
            content,
            site,
            addedLevelTypeList,
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
            <CheckBoxGroup>
                <CheckBoxText>程度 </CheckBoxText>
                {streetDanceLevel.map((levelType, i) => {
                    const { type } = levelType;
                    return (
                        <LabelCheckBox htmlFor={type} key={i}>
                            <span>{type}</span>
                            <CheckBox
                                type="checkbox"
                                id={type}
                                name={type}
                                value={type}
                                onChange={(e) => {
                                    if (
                                        addedLevelTypeList.includes(
                                            e.target.value
                                        )
                                    ) {
                                        addedLevelTypeList.splice(
                                            addedLevelTypeList.indexOf(
                                                e.target.value
                                            ),
                                            1
                                        );
                                    } else {
                                        addedLevelTypeList.push(e.target.value);
                                    }
                                }}
                            />
                        </LabelCheckBox>
                    );
                })}
            </CheckBoxGroup>
            <RadioGroup>
                <Label>
                    <LabelText>場地</LabelText>
                    <RadioWrap>
                        <span>室內</span>
                        <Radio
                            type="radio"
                            name="site"
                            value="室內"
                            onChange={(e) => setSite(e.target.value)}
                        />
                    </RadioWrap>
                    <RadioWrap>
                        <span>室外</span>
                        <Radio
                            type="radio"
                            name="site"
                            value="室外"
                            onChange={(e) => setSite(e.target.value)}
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
const CheckBoxGroup = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;
const LabelCheckBox = styled.label`
    display: flex;
    padding: 0 10px;
`;
const CheckBox = styled.input`
    display: flex;
`;
const CheckBoxText = styled.label`
    font-size: 28px;
`;

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
    display: flex;
    align-items: center;
    padding: 0 10px;
`;
export default Mahjong;
