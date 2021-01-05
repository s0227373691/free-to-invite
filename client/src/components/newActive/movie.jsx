import React, { useState } from 'react';
import styled from 'styled-components';
import dateFormat from 'dateformat';

import { SelectClearDefault } from '../styles/selects';
import { ButtonClearDefault } from '../styles/buttons';
import { TextareaClearDefault } from '../styles/textarea';
import { InputClearDefault } from '../styles/inputs';

import { postNewActiveMovie } from '../../lib/api/newActive/movie';

import IconPrice from '../../assets/svg/price';
import IconCalendar from '../../assets/svg/calendar';
import IconTitle from '../../assets/svg/title';
import IconPlace from '../../assets/svg/place';
import IconPopulation from '../../assets/svg/population';

const Movie = (props) => {
    const now = dateFormat(new Date(), `yyyy-mm-dd'T'HH:MM`);
    const [startDate, setStartDate] = useState(now);
    const [endDate, setEndDate] = useState(now);
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [population, setPopulation] = useState('');
    const [cost, setCost] = useState('');
    const [content, setContent] = useState('');

    const [movieName, setMovieName] = useState('');
    const [addedMovieTypeList, setAddedMovieTypeList] = useState([]);
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

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postNewActiveMovie({
            activeType: props.activeType,
            startDate,
            endDate,
            title,
            place,
            population,
            cost,
            content,
            movieName,
            addedMovieTypeList,
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
            <Label htmlFor="movieName">
                <Icon src={IconPrice} />
                <Input
                    id="movieName"
                    placeholder="電影名稱"
                    type="text"
                    value={movieName}
                    onChange={(e) => setMovieName(e.target.value)}
                />
            </Label>
            <CheckBoxGroup>
                {movieTypeList.map((movieType, i) => {
                    const { type } = movieType;
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
                                        addedMovieTypeList.includes(
                                            e.target.value
                                        )
                                    ) {
                                        addedMovieTypeList.splice(
                                            addedMovieTypeList.indexOf(
                                                e.target.value
                                            ),
                                            1
                                        );
                                    } else {
                                        addedMovieTypeList.push(e.target.value);
                                    }

                                    console.log(addedMovieTypeList);
                                }}
                            />
                        </LabelCheckBox>
                    );
                })}
            </CheckBoxGroup>
            <TextArea
                placeholder="補充說明..."
                onChange={(e) => setContent(e.target.value)}
                value={content}
            ></TextArea>
            <Button type="submit">新增</Button>
        </Form>
    );
};
const CheckBoxGroup = styled.div`
    display: flex;
`;
const LabelCheckBox = styled.label`
    display: flex;
`;
const CheckBox = styled.input`
    display: flex;
`;
const Form = styled.form`
    display: flex;
    flex-direction: column;
`;
const InputDate = styled(InputClearDefault)`
    width: auto;
    margin: 0 30px;
    padding: 10px 0;
    border: 0px solid #dadce0;
    font-size: 23px;
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
const Input = styled(InputClearDefault)`
    margin: 0 30px;
    padding: 15px 0;
    font-size: 25px;

    border: none;
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
const NewMovie = styled.div`
    display: flex;
    align-items: center;
`;

const SelectMovieType = styled(SelectClearDefault)`
    font-size: 18px;
    color: #ffffff;
    background: rgb(155, 155, 155);
    margin: 0 15px;
`;
const InputMovieName = styled(Input)`
    font-size: 20px;
`;

const ButtonNewMovieType = styled.div`
    width: 100px;
    padding: 10px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 18px;
    color: #ffffff;
    background: rgb(155, 155, 155);

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

const MovieType = styled.div`
    display: inline-block;
    border: 1px solid black;
    padding: 5px;
    border-radius: 5px;
`;
const AddedMovieType = styled.div`
    display: flex;
    margin-bottom: 20px;
    padding: 8px;
`;
export default Movie;
