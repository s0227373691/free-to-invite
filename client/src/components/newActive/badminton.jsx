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
    const [addedStrengthList, setAddedStrengthList] = useState([]);
    const [strengthOptions, setStrengthOptions] = useState([
        {
            optgroupLabel: '高階',
            options: [
                {
                    text: '上',
                    value: '高階上',
                    borderLeftColor: ' #ffffff',
                },
                {
                    text: '中',
                    value: '高階中',
                    borderLeftColor: ' #850000',
                },
                {
                    text: '下',
                    value: '高階下',
                    borderLeftColor: ' #0097ce',
                },
            ],
        },
        {
            optgroupLabel: '中階',
            options: [
                {
                    text: '上',
                    value: '中階上',
                    borderLeftColor: ' #3700ff',
                },
                {
                    text: '中',
                    value: '中階中',
                    borderLeftColor: ' #73ff00',
                },
                {
                    text: '下',
                    value: '中階下',
                    borderLeftColor: ' #fc7303',
                },
            ],
        },
        {
            optgroupLabel: '初階',
            options: [
                {
                    text: '上',
                    value: '初階上',
                    borderLeftColor: ' #de0097',
                },
                {
                    text: '中',
                    value: '初階中',
                    borderLeftColor: ' #00a976',
                },
                {
                    text: '下',
                    value: '初階下',
                    borderLeftColor: ' #eaff00',
                },
            ],
        },
    ]);

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
                    <option hidden>新增程度</option>
                    {strengthOptions.map(({ optgroupLabel, options }) => (
                        <optgroup key={optgroupLabel} label={optgroupLabel}>
                            {options.map(({ text, value }) => (
                                <option key={value} value={value}>
                                    {text}
                                </option>
                            ))}
                        </optgroup>
                    ))}
                </SelectStrength>
            </Label>
            <AddedStrengthList>
                {addedStrengthList.map((strength, i) => (
                    <StrengthTag
                        key={i}
                        onClick={(i) => handleClickDeleteTag(i)}
                    >
                        <TagName>{strength}</TagName>
                        <TagDelete className="show-tag-delete">X</TagDelete>
                    </StrengthTag>
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
    flex-wrap: wrap;
    margin-bottom: 20px;
    padding-left: 70px;
`;
const StrengthTag = styled.div`
    width: fit-content;
    margin-right: 10px;
    margin-bottom: 20px;
    padding: 18px 20px 18px 15px;
    display: flex;
    color: #ffffff;
    border-left: 6px solid red;
    border-radius: 5px;
    background-color: grey;

    .show-tag-delete {
        visibility: hidden;
    }
    &:hover {
        cursor: pointer;

        .show-tag-delete {
            visibility: visible;
        }
    }
`;

const TagName = styled.span`
    margin-right: 10px;
`;

const TagDelete = styled.span`
    &:hover {
        font-weight: bold;
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
