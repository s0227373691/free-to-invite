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

const Movie = () => {
    const now = dateFormat(new Date(), `yyyy-mm-dd'T'HH:MM`);
    const [startDate, setStartDate] = useState(now);
    const [endDate, setEndDate] = useState(now);
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [population, setPopulation] = useState('');
    const [cost, setCost] = useState('');
    const [content, setContent] = useState('');

    const [addedMovieList, setAddedMovieList] = useState([]);
    const [newMovieType, setNewMovieType] = useState('');
    const [newMovieName, setNewMovieName] = useState('');
    const movieTypeList = [
        { type: '動作' },
        { type: '警匪' },
        { type: '醫學' },
        { type: '功夫' },
        { type: '運動' },
        { type: '戰爭' },
        { type: '歷史' },
        { type: '災難' },
        { type: '喜劇' },
        { type: '愛情' },
        { type: '色情' },
        { type: '驚悚' },
        { type: '懸疑' },
        { type: '恐怖' },
        { type: '卡通' },
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
    const handleChangeMovieType = (e) => {
        const { value } = e.target;
        setNewMovieType(value);
    };
    const handleClickButtonNewMovie = () => {
        if (!newMovieType) return alert('請選擇桌遊類型');
        if (!newMovieName) return alert('請輸入桌遊名稱');
        const newAddedBoardGameList = [
            ...addedMovieList,
            {
                type: newMovieType,
                name: newMovieName,
            },
        ];
        setAddedMovieList(newAddedBoardGameList);
        setNewMovieType('');
        setNewMovieName('');
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            '開始時間',
            startDate,
            '結束時間',
            endDate,
            '標題',
            title,
            '地點',
            place,
            '人數',
            population,
            '花費',
            cost,
            '內容',
            content,
            '增加電影',
            addedMovieList
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
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
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

            <Label htmlFor="population">
                <Icon src={IconPopulation} />
                <Input
                    id="population"
                    placeholder="人數"
                    type="number"
                    value={population}
                    onChange={(e) => setPopulation(e.target.value)}
                />
            </Label>
            <Label htmlFor="price">
                <Icon src={IconPrice} />
                <Input
                    id="price"
                    placeholder="參加費用"
                    type="number"
                    value={cost}
                    onChange={(e) => setCost(e.target.value)}
                />
            </Label>
            <NewMovie>
                <SelectMovieType
                    onChange={handleChangeMovieType}
                    value={newMovieType}
                >
                    <option value="" hidden>
                        請選擇電影類型
                    </option>
                    {movieTypeList.map(({ type }) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </SelectMovieType>
                <InputMovieName
                    onChange={(e) => setNewMovieName(e.target.value)}
                    placeholder="電影名稱..."
                    type="text"
                />
                <ButtonNewMovie onClick={handleClickButtonNewMovie}>
                    新增
                </ButtonNewMovie>
            </NewMovie>
            <AddedMovie>
                {addedMovieList.map((movie, i) => {
                    const { type, name } = movie;
                    return (
                        <AddedMovieItem key={i}>
                            <span style={{ marginRight: '10px' }}>
                                {type}
                                {name}
                            </span>
                            <BtnDeleteTag
                                onClick={() => {
                                    const newAddedMovieList = [
                                        ...addedMovieList,
                                    ];
                                    newAddedMovieList.splice(i, 1);
                                    setAddedMovieList(newAddedMovieList);
                                }}
                            >
                                X
                            </BtnDeleteTag>
                        </AddedMovieItem>
                    );
                })}
            </AddedMovie>
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

const Input = styled(InputClearDefault)`
    margin: 0 30px;
    padding: 15px 0;
    font-size: 25px;
    border-radius: 0px;
    border: none;
    border-bottom: 1px black solid;
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

const NewMovie = styled.div`
    display: flex;
    align-items: center;
`;
const SelectMovieType = styled(SelectClearDefault)`
    font-size: 18px;
`;

const InputMovieName = styled(Input)`
    font-size: 20px;
    height: 100%;
    border: none;
`;

const AddedMovie = styled.div`
    display: flex;
    margin-bottom: 20px;
    padding: 8px;
`;

const AddedMovieItem = styled.div`
    margin-right: 10px;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 18px;
`;

const ButtonNewMovie = styled.div`
    width: 90px;
    padding: 10px 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 18px;
    background-color: rgb(155, 155, 155);

    box-sizing: border-box;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
    &:active {
        opacity: 1;
    }
`;

const BtnDeleteTag = styled.span`
    &:hover {
        color: grey;
        cursor: pointer;
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
export default Movie;
