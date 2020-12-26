import React, { useState } from 'react';
import styled from 'styled-components';
import dateFormat from 'dateformat';

import { SelectClearDefault } from '../styles/selects';
import { ButtonClearDefault } from '../styles/buttons';
import { TextareaClearDefault } from '../styles/textarea';
import { InputClearDefault } from '../styles/inputs';

import {
    IconBadminton,
    IconCalendar,
    IconNet,
    IconPlace,
    IconPopulation,
    IconPrice,
    IconStrength,
    IconTitle,
} from '../../assets/config/imageUrl';

const Badminton = () => {
    const now = dateFormat(new Date(), `yyyy-mm-dd'T'HH:MM`);
    const [startDate, setStartDate] = useState(now);
    const [endDate, setEndDate] = useState(now);
    const [badmintonType, setBadmintonType] = useState('');
    const [site, setSite] = useState('');
    const [population, setPopulation] = useState('');
    const [cost, setCost] = useState('');
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [content, setContent] = useState('');
    const [strengthOptions, setStrengthOptions] = useState([
        {
            optgroupLabel: '高階',
            options: [
                {
                    text: '上',
                    value: '高階上',
                },
                {
                    text: '中',
                    value: '高階中',
                },
                {
                    text: '下',
                    value: '高階下',
                },
            ],
        },
        {
            optgroupLabel: '中階',
            options: [
                {
                    text: '上',
                    value: '中階上',
                },
                {
                    text: '中',
                    value: '中階中',
                },
                {
                    text: '下',
                    value: '中階下',
                },
            ],
        },
        {
            optgroupLabel: '初階',
            options: [
                {
                    text: '上',
                    value: '初階上',
                },
                {
                    text: '中',
                    value: '初階中',
                },
                {
                    text: '下',
                    value: '初階下',
                },
            ],
        },
    ]);
    const [addedStrengthList, setAddedStrengthList] = useState([]);

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

    const handleChangeSelectStrength = (e) => {
        const selectedValue = e.target.value;
        const newStrengthList = [...addedStrengthList];
        newStrengthList.push(selectedValue);
        setAddedStrengthList(newStrengthList);
    };

    const handleClickDeleteTag = (i) => {
        const newAddedStrengthList = [...addedStrengthList];
        newAddedStrengthList.splice(i, 1);
        setAddedStrengthList(newAddedStrengthList);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <Form onSubmit={handleSubmit}>
            <Label>
                <Icon src={IconCalendar} />
                <DateRange>
                    <div>
                        <span>開始</span>
                        <InputDate
                            type="datetime-local"
                            min={now}
                            value={startDate}
                            onChange={handleChangeStartDate}
                            required
                        />
                    </div>
                    <div>
                        <span>結束</span>
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
            <Label htmlFor="site">
                <Icon src={IconNet} />
                <Input
                    id="site"
                    type="number"
                    placeholder="球網面數"
                    value={site}
                    onChange={(e) => setSite(e.target.value)}
                />
            </Label>
            <Label htmlFor="badminton_type">
                <Icon src={IconBadminton} />
                <Input
                    id="badminton_type"
                    type="text"
                    placeholder="使用球種"
                    value={badmintonType}
                    onChange={(e) => setBadmintonType(e.target.value)}
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
            <Label>
                <Icon src={IconStrength} />
                <SelectStrength value="" onChange={handleChangeSelectStrength}>
                    <option hidden>請選擇程度</option>
                    {strengthOptions.map(({ optgroupLabel, options }) => (
                        <optgroup label={optgroupLabel}>
                            {options.map(({ text, value }) => (
                                <option value={value}>{text}</option>
                            ))}
                        </optgroup>
                    ))}
                </SelectStrength>
            </Label>
            <AddedStrengthList>
                {addedStrengthList.map((strength, i) => (
                    <AddedStrength key={i}>
                        <span style={{ marginRight: '10px' }}>{strength}</span>
                        <BtnDeleteTag onClick={(i) => handleClickDeleteTag(i)}>
                            X
                        </BtnDeleteTag>
                    </AddedStrength>
                ))}
            </AddedStrengthList>
            <TextArea
                placeholder="補充說明..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></TextArea>
            <Button type="submit">新增</Button>
        </Form>
    );
};

export default Badminton;

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

const SelectStrength = styled(SelectClearDefault)`
    min-width: 300px;
    margin: 0 30px;
    background-color: #dadce0;
`;

const AddedStrengthList = styled.div`
    display: flex;
    margin-bottom: 20px;
`;
const AddedStrength = styled.div`
    width: fit-content;
    margin-bottom: 20px;
    padding: 8px 12px;
    color: #ffffff;
    background-color: grey;
    border-radius: 5px;
    margin-right: 5px;
    &:hover {
        cursor: pointer;
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
