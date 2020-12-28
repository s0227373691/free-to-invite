import React, { useState } from 'react';
import styled from 'styled-components';

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
    const [addedMovieList, setAddedMovieList] = useState([]);
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
            <NewMovie>
                <SelectMovieType>
                    <option value="" hidden>
                        請選擇桌遊類型
                    </option>
                    {movieTypeList.map(({ type }) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </SelectMovieType>
                <InputMovieName placeholder="電影名稱..." type="text" />
                <ButtonNewMovie>新增</ButtonNewMovie>
            </NewMovie>
            <AddedMovie>
                {addedMovieList.map((movie, i) => {
                    return (
                        <AddedMovieItem key={i}>
                            <span style={{ marginRight: '10px' }}>
                                {'類型'}
                                {'name'}
                            </span>
                            <BtnDeleteTag
                            // onClick={() => {
                            //     const newAddedBoardGameList = [
                            //         ...addedBoardGameList,
                            //     ];
                            //     newAddedBoardGameList.splice(i, 1);
                            //     setAddedBoardGameList(
                            //         newAddedBoardGameList
                            //     );
                            // }}
                            >
                                X
                            </BtnDeleteTag>
                        </AddedMovieItem>
                    );
                })}
            </AddedMovie>

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

const NewMovie = styled.div`
    display: flex;
`;
const SelectMovieType = styled(SelectClearDefault)`
    margin-bottom: 20px;
    font-size: 18px;
`;

const InputMovieName = styled(Input)`
    font-size: 20px;
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
    color: white;
`;

const ButtonNewMovie = styled.div`
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
export default Movie;
