import React, { useState } from 'react';
import styled from 'styled-components';

import dateFormat from 'dateformat';

import { SelectClearDefault } from '../styles/selects';
import { ButtonClearDefault } from '../styles/buttons';
import { TextareaClearDefault } from '../styles/textarea';
import { InputClearDefault } from '../styles/inputs';

import IconPrice from '../../assets/svg/price';
import IconCalendar from '../../assets/svg/calendar';
import IconTitle from '../../assets/svg/title';
import IconPlace from '../../assets/svg/place';
import IconPopulation from '../../assets/svg/population';

const Workout = (props) => {
    const now = dateFormat(new Date(), `yyyy-mm-dd'T'HH:MM`);
    const [startDate, setStartDate] = useState(now);
    const [endDate, setEndDate] = useState(now);
    const [title, setTitle] = useState('');
    const [population, setPopulation] = useState('');
    const [cost, setCost] = useState('');
    const [minage, setMinage] = useState('');
    const [maxage, setMaxage] = useState('');
    const [standardType, setStandardType] = useState('');
    const [wayType, setWayType] = useState('');
    const [levelType, setLevelType] = useState('');
    const [content, setContent] = useState('');
    const [place, setPlace] = useState('');
    const standardTypeList = [
        { type: '初學' },
        { type: '基礎' },
        { type: '休閒' },
        { type: '老手' },
        { type: '選手' },
    ];
    const wayTypeList = [{ type: '健美' }, { type: '健力' }, { type: '備賽' }];

    const levelTypeList = [{ type: '一般' }, { type: '高' }, { type: '極限' }];

    const [member, setMember] = useState('');
    const [bath, setBath] = useState('');

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
            minage,
            maxage,
            standardType,
            wayType,
            member,
            bath,
            place,
            content
        );
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
            <Label htmlFor="cost">
                <Icon src={IconPrice} />
                <Input
                    id="cost"
                    type="number"
                    onChange={(e) => setCost(e.target.value)}
                    value={cost}
                    placeholder="花費"
                    required
                />
            </Label>
            <Label htmlFor="age">
                <Icon src={IconPrice} />
                <Inputage
                    id="age"
                    type="number"
                    onChange={(e) => setMinage(e.target.value)}
                    value={minage}
                    placeholder="年齡"
                    required
                />
                ~
                <Inputage
                    id="age"
                    type="number"
                    onChange={(e) => setMaxage(e.target.value)}
                    value={maxage}
                    required
                />
            </Label>
            <RadioGroup>
                <Label htmlFor="standard">
                    <Icon src={IconPrice} />
                    <SelectType
                        onChange={(e) => {
                            setStandardType(e.target.value);
                        }}
                        value={standardType}
                    >
                        <option value="" hidden>
                            程度
                        </option>
                        {standardTypeList.map(({ type }) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </SelectType>
                </Label>

                <Label htmlFor="way">
                    <Icon src={IconPrice} />
                    <SelectType
                        onChange={(e) => {
                            setWayType(e.target.value);
                        }}
                        value={wayType}
                    >
                        <option value="" hidden>
                            方向
                        </option>
                        {wayTypeList.map(({ type }) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </SelectType>
                </Label>

                <Label htmlFor="level">
                    <Icon src={IconPrice} />
                    <SelectType
                        onChange={(e) => {
                            setLevelType(e.target.value);
                        }}
                        value={levelType}
                    >
                        <option value="" hidden>
                            強度
                        </option>
                        {levelTypeList.map(({ type }) => (
                            <option key={type} value={type}>
                                {type}
                            </option>
                        ))}
                    </SelectType>
                </Label>
            </RadioGroup>

            <Label htmlFor="body">
                <Icon src={IconPrice} />
                <BodyText>部位</BodyText>
                <BodyText>手部</BodyText>
                <InputCheck type="checkbox" required />
                <BodyText>胸部</BodyText>
                <InputCheck type="checkbox" required />
                <BodyText>背部</BodyText>
                <InputCheck type="checkbox" required />
                <BodyText>腹部</BodyText>
                <InputCheck type="checkbox" required />
                <BodyText>腿部</BodyText>
                <InputCheck type="checkbox" required />
            </Label>

            <RadioGroup>
                <Label>
                    <Icon src={IconCalendar} />
                    <LabelText>會員</LabelText>
                    <RadioWrap>
                        <span>是</span>
                        <Radio
                            type="radio"
                            name="member"
                            value="是"
                            onChange={(e) => setMember(e.target.value)}
                        />
                    </RadioWrap>
                    <RadioWrap>
                        <span>否</span>
                        <Radio
                            type="radio"
                            name="member"
                            value="否"
                            onChange={(e) => setMember(e.target.value)}
                        />
                    </RadioWrap>
                </Label>
                <Label>
                    <Icon src={IconCalendar} />
                    <LabelText>盥洗設備</LabelText>
                    <RadioWrap>
                        <span>是</span>
                        <Radio
                            type="radio"
                            name="bath"
                            value="是"
                            onChange={(e) => setBath(e.target.value)}
                        />
                    </RadioWrap>
                    <RadioWrap>
                        <span>否</span>
                        <Radio
                            type="radio"
                            name="bath"
                            value="否"
                            onChange={(e) => setBath(e.target.value)}
                        />
                    </RadioWrap>
                </Label>
            </RadioGroup>

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

    height: 50px;
`;
const LabelText = styled.div`
    font-size: 25px;
    margin-left: 30px;
`;

const BodyText = styled.div`
    margin: 0 25px;
    padding: 15px;
    border: 0px solid #dadce0;
    font-size: 25px;
`;

const InputCheck = styled.input``;

const Radio = styled.input``;
const RadioWrap = styled.div`
    margin: 0px 5px;
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

const Inputage = styled(InputClearDefault)`
    width: 90px;
    margin-left: 30px;
    margin-right: -17px;
    border: 0px solid #dadce0;
    font-size: 25px;
`;

const SelectType = styled(SelectClearDefault)`
    font-size: 18px;
    margin-left: 30px;
    margin-right: 15px;
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

export default Workout;
