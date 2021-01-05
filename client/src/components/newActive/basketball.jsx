import styled from 'styled-components';
import React, { useState } from 'react';

import { ButtonClearDefault } from '../styles/buttons';
import { TextareaClearDefault } from '../styles/textarea';
import { InputClearDefault } from '../styles/inputs';

import { postNewActiveBasketball } from '../../lib/api/newActive/basketball';
import dateFormat from 'dateformat';

import IconTitle from '../../assets/svg/title';
import IconCalendar from '../../assets/svg/calendar';
import IconPlace from '../../assets/svg/place';
import IconPopulation from '../../assets/svg/population';
import IconPrice from '../../assets/svg/price';
import basketballTeam from '../../assets/svg/basketball-team';

const Basketball = (props) => {
    // TODO 新增欄位：參加費用(單兵) <input tpye='number'>
    // TODO 新增欄位：參加費用(隊) <input tpye='number'>
    // TODO 新增欄位：規則 <TextArea>
    // TODO 新增欄位：輪打隊數 <Input type: 'number'>
    // TODO 新增欄位：球友程度 <Input type: 'text'>
    const now = dateFormat(new Date(), `yyyy-mm-dd'T'HH:MM`);
    const [startDate, setStartDate] = useState(now);
    const [endDate, setEndDate] = useState(now);
    const [title, setTitle] = useState('');
    const [population, setPopulation] = useState('');
    const [content, setContent] = useState('');
    const [place, setPlace] = useState('');

    const [individualCost, setIndividualCost] = useState('');
    const [teamCost, setTeamCost] = useState('');
    const [roundNumber, setRoundNumber] = useState('');
    const [ballfriendLevel, setBallfriendLevel] = useState('');
    const [rule, setRule] = useState('');

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
        await postNewActiveBasketball({
            activeType: props.activeType,
            startDate,
            endDate,
            title,
            population,
            content,
            place,
            individualCost,
            teamCost,
            roundNumber,
            ballfriendLevel,
            rule,
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
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    id="title"
                    type="text"
                    placeholder="標題"
                />
            </Label>

            <Label htmlFor="place">
                <Icon src={IconPlace} />
                <Input
                    value={place}
                    onChange={(e) => setPlace(e.target.value)}
                    id="place"
                    type="text"
                    placeholder="地點"
                />
            </Label>

            <Label htmlFor="population">
                <Icon src={IconPopulation} />
                <Input
                    onChange={(e) => setPopulation(e.target.value)}
                    value={population}
                    id="population"
                    placeholder="人數"
                    type="number"
                />
            </Label>
            <Label htmlFor="individualCost">
                <Icon src={IconPrice} />
                <Input
                    onChange={(e) => setIndividualCost(e.target.value)}
                    value={individualCost}
                    id="individualCost"
                    type="number"
                    placeholder="單兵費用"
                />
            </Label>
            <Label htmlFor="teamCost">
                <Icon src={IconPrice} />
                <Input
                    onChange={(e) => setTeamCost(e.target.value)}
                    value={teamCost}
                    id="teamCost"
                    type="number"
                    placeholder="隊費用"
                />
            </Label>
            <Label htmlFor="roundNumber">
                <Icon src={basketballTeam} />
                <Input
                    onChange={(e) => setRoundNumber(e.target.value)}
                    value={roundNumber}
                    id="roundNumber"
                    type="text"
                    placeholder="輪打對數"
                />
            </Label>
            <Label htmlFor="ballfriendLevel">
                <Icon src={IconTitle} />
                <Input
                    onChange={(e) => setBallfriendLevel(e.target.value)}
                    value={ballfriendLevel}
                    id="ballfriendLevel"
                    type="text"
                    placeholder="球友程度"
                />
            </Label>
            <TextArea
                onChange={(e) => setRule(e.target.value)}
                value={rule}
                placeholder="規則"
            ></TextArea>
            <TextArea
                onChange={(e) => setContent(e.target.value)}
                value={content}
                placeholder="補充說明..."
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

const InputDate = styled(InputClearDefault)`
    width: auto;
    margin: 0 30px;
    padding: 10px 0;
    border: 0px solid #dadce0;
    font-size: 23px;
`;

const DateRange = styled.div`
    margin: 0 30px;
`;

export default Basketball;
