import React, { useState } from 'react';
import styled from 'styled-components';

import { SelectClearDefault } from '../styles/selects';
import { ButtonClearDefault } from '../styles/buttons';
import { TextareaClearDefault } from '../styles/textarea';

import { postNewActiveBoardGame } from '../../lib/api/newActive/boardGame';
import { InputClearDefault } from '../styles/inputs';

const Boardgame = (props) => {
    const [date, setDate] = useState('');
    const [population, setPopulation] = useState('');
    const [boardGameType, setBoardGameType] = useState('');
    const [cost, setCost] = useState('');
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [content, setContent] = useState('');
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
        if (!newBoardGameType) return alert('請選擇桌遊類型');
        if (!newBoardGameName) return alert('請輸入桌遊名稱');
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postNewActiveBoardGame({
            activeType: props.activeType,
            date,
            population,
            boardGameType,
            title,
            content,
        });
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Input
                type="date"
                placeholder="日期"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                required
            />
            <Input
                type="text"
                placeholder="標題"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <Input
                type="text"
                placeholder="地點"
                value={place}
                onChange={(e) => setPlace(e.target.value)}
            />
            <Input
                placeholder="人數"
                type="number"
                value={population}
                onChange={(e) => setPopulation(e.target.value)}
            />
            <Input
                placeholder="參加費用..."
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
            />
            <NewBoardGame>
                <SelectBoardGameType
                    style={{ background: backgroundColor }}
                    value={newBoardGameType}
                    onChange={handleChangeSelectBoardGameType}
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
                            <BtnDeleteTag>X</BtnDeleteTag>
                        </AddedBoardGameItem>
                    );
                })}
            </AddedBoardGame>
            <TextArea
                placeholder="補充說明..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
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
    padding: 15px 10px;
    margin-bottom: 20px;
    border: 0px solid #dadce0;
    font-size: 25px;
`;

const NewBoardGame = styled.div`
    display: flex;
`;
const SelectBoardGameType = styled(SelectClearDefault)`
    margin-bottom: 20px;
    font-size: 18px;
    color: #ffffff;
`;
const InputBoardGameName = styled(Input)`
    font-size: 20px;
`;
const ButtonNewBoardGame = styled.div`
    width: 90px;
    padding: 10px 15px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 18px;
    color: #ffffff;
    box-sizing: border-box;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
    &:active {
        opacity: 1;
    }
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

const BtnDeleteTag = styled.span`
    &:hover {
        color: grey;
        cursor: pointer;
    }
`;

export default Boardgame;
