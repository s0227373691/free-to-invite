import React, { useState } from 'react';
import styled from 'styled-components';

import { SelectClearDefault } from '../styles/selects';
import { ButtonClearDefault } from '../styles/buttons';
import { TextareaClearDefault } from '../styles/textarea';

import { postCreateActiveBoardgame } from '../../lib/api/api';

import { InputClearDefault } from '../styles/inputs';

import dateFormat from 'dateformat';

import IconPrice from '../../assets/svg/price';
import IconCalendar from '../../assets/svg/calendar';
import IconTitle from '../../assets/svg/title';
import IconPlace from '../../assets/svg/place';
import IconPopulation from '../../assets/svg/population';

const Boardgame = (props) => {
    const now = dateFormat(new Date(), `yyyy-mm-dd'T'HH:MM`);
    const [startDate, setStartDate] = useState(now);
    const [endDate, setEndDate] = useState(now);
    const [title, setTitle] = useState('');
    const [population, setPopulation] = useState('');
    const [cost, setCost] = useState('');
    const [content, setContent] = useState('');
    const [place, setPlace] = useState('');

    const [backgroundColor, setBackgroundColor] = useState('#9b9b9b');
    const [newBoardGameType, setNewBoardGameType] = useState('');
    const [newBoardGameName, setNewBoardGameName] = useState('');
    const [addedBoardGameList, setAddedBoardGameList] = useState([]);
    const boardGameTypeList = [
        { type: '派對', color: '#efd100d6' },
        { type: '策略', color: '#00efe3' },
        { type: '情境', color: '#58ef00' },
        { type: '戰爭', color: '#5400ef' },
        { type: '抽象', color: '#e700ef' },
        { type: '交換卡片', color: '#ef0034' },
        { type: '兒童', color: '#0070ef' },
        { type: '家庭', color: '#ef4400' },
        { type: '其他', color: '#1000ef' },
    ];

    const setBoardGameColor = (boardGameType) => {
        const { color } = boardGameTypeList.find(
            ({ type }) => type === boardGameType
        );
        setBackgroundColor(color);
    };

    const handleChangeSelectBoardGameType = (e) => {
        const { value } = e.target;
        setBoardGameColor(value);
        setNewBoardGameType(value);
    };

    const handleClickButtonNewBoardGame = () => {
        if (!newBoardGameType) return alert('請選擇電影類型');
        if (!newBoardGameName) return alert('請輸入電影名稱');
        const newAddedBoardGameList = [
            ...addedBoardGameList,
            {
                type: newBoardGameType,
                name: newBoardGameName,
                background: backgroundColor,
            },
        ];
        setAddedBoardGameList(newAddedBoardGameList);
        setNewBoardGameType('');
        setNewBoardGameName('');
        setBackgroundColor('#9b9b9b');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        postCreateActiveBoardgame({
            activeType: props.activeType,
            startDate,
            endDate,
            title,
            population,
            cost,
            place,
            content,
            addedBoardGameList,
        })
            .then((res) => res.data)
            .then((res) => {
                switch (res.stat) {
                    case 'OK':
                        alert('新增活動成功!!');
                        history.push('/');
                        break;
                    case 'fail':
                        alert('新增活動失敗!!');
                        console.log(res.message);
                        break;

                    default:
                        break;
                }
            })
            .catch((err) => console.error(err));
    };
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
            <Label>
                <Icon src={IconTitle} />
                <Input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    placeholder="標題"
                    required
                />
            </Label>
            <Label>
                <Icon src={IconPopulation} />
                <Input
                    type="number"
                    onChange={(e) => setPopulation(e.target.value)}
                    value={population}
                    placeholder="人數"
                    required
                />
            </Label>
            <Label>
                <Icon src={IconPrice} />
                <Input
                    type="number"
                    onChange={(e) => setCost(e.target.value)}
                    value={cost}
                    placeholder="花費"
                    required
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

            <NewBoardGame>
                <SelectBoardGameType
                    style={{ background: backgroundColor }}
                    onChange={handleChangeSelectBoardGameType}
                    value={newBoardGameType}
                >
                    <option value="" hidden>
                        請選擇桌遊類型
                    </option>
                    {boardGameTypeList.map(({ type }) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </SelectBoardGameType>
                <InputBoardGameName
                    placeholder="桌遊名稱..."
                    type="text"
                    value={newBoardGameName}
                    onChange={(e) => setNewBoardGameName(e.target.value)}
                />
                <ButtonNewBoardGame
                    style={{ backgroundColor: backgroundColor }}
                    onClick={handleClickButtonNewBoardGame}
                >
                    新增
                </ButtonNewBoardGame>
            </NewBoardGame>
            <AddedBoardGame>
                {addedBoardGameList.map((boardGame, i) => {
                    const { type, name, background } = boardGame;
                    return (
                        <AddedBoardGameItem
                            key={i}
                            style={{ background: background }}
                        >
                            <span style={{ marginRight: '10px' }}>
                                {type}
                                {name}
                            </span>
                            <BtnDeleteTag
                                onClick={() => {
                                    const newAddedBoardGameList = [
                                        ...addedBoardGameList,
                                    ];
                                    newAddedBoardGameList.splice(i, 1);
                                    setAddedBoardGameList(
                                        newAddedBoardGameList
                                    );
                                }}
                            >
                                X
                            </BtnDeleteTag>
                        </AddedBoardGameItem>
                    );
                })}
            </AddedBoardGame>

            <TextArea
                placeholder="補充說明..."
                placeholder="補充說明"
                onChange={(e) => setContent(e.target.value)}
                value={content}
            ></TextArea>
            <Button type="submit">新增</Button>
        </Form>
    );
};

const Form = styled.form`
    max-width: 768px;
    display: flex;
    flex-direction: column;
`;
const Label = styled.label`
    display: flex;
    margin-bottom: 20px;
`;
const Input = styled(InputClearDefault)`
    margin: 0 30px;
    padding: 15px 0;
    border: 0px solid #dadce0;
    font-size: 25px;
`;
const Icon = styled.img`
    width: 40px;
`;
const TextArea = styled(TextareaClearDefault)`
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    font-size: 20px;
    border: 0px;
`;
const NewBoardGame = styled.div`
    display: flex;
    align-items: center;
`;
const SelectBoardGameType = styled(SelectClearDefault)`
    font-size: 18px;
    color: #ffffff;
`;

const InputBoardGameName = styled(Input)`
    font-size: 20px;
`;
const AddedBoardGame = styled.div`
    display: flex;
    margin-bottom: 20px;
    padding: 8px;
`;

const AddedBoardGameItem = styled.div`
    margin-right: 10px;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 18px;
    color: white;
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

const BtnDeleteTag = styled.span`
    &:hover {
        cursor: pointer;
    }
`;

const ButtonNewBoardGame = styled.div`
    width: 90px;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 18px;
    color: #ffffff;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
    &:active {
        opacity: 1;
    }
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

export default Boardgame;
