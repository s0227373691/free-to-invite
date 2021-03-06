import React, { useState } from 'react';
import styled from 'styled-components';
import dateFormat from 'dateformat';

import { SelectClearDefault } from '../styles/selects';
import { ButtonClearDefault } from '../styles/buttons';
import { TextareaClearDefault } from '../styles/textarea';
import { InputClearDefault } from '../styles/inputs';

import { postNewActiveBadminton } from '../../lib/api/newActive/badminton';
import { apiPostCreateActiveBadminton } from '../../lib/api/api';

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

const Badminton = (props) => {
    let strength = [
        {
            optgroupLabel: '高階',
            options: [
                {
                    text: '上',
                    value: '高階-上',
                    borderLeftColor: ' #00ffea',
                    isAdded: false,
                },
                {
                    text: '中',
                    value: '高階-中',
                    borderLeftColor: ' #850000',
                    isAdded: false,
                },
                {
                    text: '下',
                    value: '高階-下',
                    borderLeftColor: ' #0097ce',
                    isAdded: false,
                },
            ],
        },
        {
            optgroupLabel: '中階',
            options: [
                {
                    text: '上',
                    value: '中階-上',
                    borderLeftColor: ' #3700ff',
                    isAdded: false,
                },
                {
                    text: '中',
                    value: '中階-中',
                    borderLeftColor: ' #73ff00',
                    isAdded: false,
                },
                {
                    text: '下',
                    value: '中階-下',
                    borderLeftColor: ' #fc7303',
                    isAdded: false,
                },
            ],
        },
        {
            optgroupLabel: '初階',
            options: [
                {
                    text: '上',
                    value: '初階-上',
                    borderLeftColor: ' #de0097',
                    isAdded: false,
                },
                {
                    text: '中',
                    value: '初階-中',
                    borderLeftColor: ' #00a976',
                    isAdded: false,
                },
                {
                    text: '下',
                    value: '初階-下',
                    borderLeftColor: ' #eaff00',
                    isAdded: false,
                },
            ],
        },
    ];
    const now = dateFormat(new Date(), `yyyy-mm-dd'T'HH:MM`);
    const [startDate, setStartDate] = useState(now);
    const [endDate, setEndDate] = useState(now);
    const [badmintonType, setBadmintonType] = useState('');
    const [nets, setNets] = useState('');
    const [population, setPopulation] = useState('');
    const [cost, setCost] = useState('');
    const [title, setTitle] = useState('');
    const [place, setPlace] = useState('');
    const [content, setContent] = useState('');
    const [addedStrengthList, setAddedStrengthList] = useState(strength);
    const [strengthOptions, setStrengthOptions] = useState(strength);

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
        newStrengthList.map((item) => {
            item.options.map((x) => {
                if (x.value === selectedValue) return (x.isAdded = !x.isAdded);
            });
        });

        setStrengthOptions(newStrengthList);
    };

    const handleClickDeleteTag = (optionValue) => {
        const newAddedStrengthList = [...addedStrengthList];
        newAddedStrengthList.map(({ options }) =>
            options.map((item) => {
                if (item.value === optionValue)
                    return (item.isAdded = !item.isAdded);
            })
        );
        setAddedStrengthList(newAddedStrengthList);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(addedStrengthList);
        await apiPostCreateActiveBadminton({
            activeType: props.activeType,
            startDate,
            endDate,
            title,
            place,
            nets,
            badmintonType,
            population,
            cost,
            content,
        })
            .then((res) => res.data)
            .then((res) => console.log(res));
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
            <Label htmlFor="nets">
                <Icon src={IconNet} />
                <Input
                    id="nets"
                    type="number"
                    placeholder="球網面數"
                    value={nets}
                    onChange={(e) => setNets(e.target.value)}
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
                            {options.map(({ text, value, isAdded }) => {
                                if (isAdded) return;
                                return (
                                    <option key={value} value={value}>
                                        {text}
                                    </option>
                                );
                            })}
                        </optgroup>
                    ))}
                </SelectStrength>
            </Label>
            <AddedStrengthList>
                {addedStrengthList.map((strengthType) =>
                    strengthType.options.map(
                        ({ isAdded, value, borderLeftColor }) => {
                            if (!isAdded) return;
                            return (
                                <StrengthTag
                                    key={value}
                                    borderLeftColor={borderLeftColor}
                                    onClick={() => handleClickDeleteTag(value)}
                                >
                                    <span>{value}</span>
                                    <TagDelete className="show-tag-delete">
                                        X
                                    </TagDelete>
                                </StrengthTag>
                            );
                        }
                    )
                )}
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
    padding: 12px 0 12px 10px;
    display: flex;
    color: #ffffff;
    border-left: 6px solid ${({ borderLeftColor }) => borderLeftColor};
    border-radius: 5px;
    background-color: #a0a0a0;

    .show-tag-delete {
        visibility: hidden;
    }
    &:hover {
        cursor: pointer;
        background-color: #929292;
        .show-tag-delete {
            visibility: visible;
        }
    }
`;

const TagDelete = styled.span`
    padding: 0 10px;
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

const BtnDeleteTag = styled.span`
    &:hover {
        color: grey;
        cursor: pointer;
    }
`;
