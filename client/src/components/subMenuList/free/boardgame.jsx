import React, { useState } from 'react';
import styled from 'styled-components';

import Select from '../../commom/baseTag/select';
import BaseInput from '../../commom/baseTag/Input';

import { postActiveFreeBoardGame } from '../../../lib/api/addActive/free';

const Boardgame = (props) => {
    const [date, setDate] = useState('');
    const [population, setPopulation] = useState('');
    const [precautions, setPrecautions] = useState('');
    const [boardgameType, setBoardgameType] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        await postActiveFreeBoardGame({
            primaryType: props.primaryType,
            minorType: props.minorType,
            date,
            people: population,
            precautions,
            boardgameType,
            title,
            content,
        });
    };
    return (
        <From onSubmit={handleSubmit}>
            <Upperlock>
                <Label htmlFor="date">
                    <Span>日期 : </Span>
                    <Input
                        id="date"
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        required
                    />
                </Label>
                <Label htmlFor="population">
                    <Span>人數 : </Span>
                    <Input
                        id="population"
                        type="number"
                        value={population}
                        onChange={(e) => setPopulation(e.target.value)}
                    />
                </Label>
                <Label htmlFor="precautions">
                    <Span>注意事項 : </Span>
                    <Input
                        id="precautions"
                        type="text"
                        value={precautions}
                        onChange={(e) => setPrecautions(e.target.value)}
                    />
                </Label>
                <SelectBoardGameType
                    onChange={(e) => setBoardgameType(e.target.value)}
                >
                    <option hidden>請選擇桌遊類型</option>
                    <option value="策略">策略</option>
                    <option value="益智">益智</option>
                    <option value="推理">推理</option>
                    <option value="角色扮演">角色扮演</option>
                    <option value="幼教">幼教</option>
                    <option value="小品">小品</option>
                    <option value="合作">合作</option>
                    <option value="陣營">陣營</option>
                </SelectBoardGameType>
            </Upperlock>

            <LowerBlock>
                <Input
                    type="text"
                    placeholder="標題"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextAreaBox>
                    <Dummy>{content}</Dummy>
                    <TextArea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                    ></TextArea>
                </TextAreaBox>
            </LowerBlock>
            <ButtonGroup>
                <button className="btnCancel">取消</button>
                <button className="btnNext">下一步</button>
            </ButtonGroup>
        </From>
    );
};
const From = styled.form`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;
const SelectBoardGameType = styled(Select)``;
const Upperlock = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
`;
const Input = styled(BaseInput)`
    height: 40px;
    border: 1px solid #dadce0;
`;
const Label = styled.label`
    display: flex;
    flex-grow: 1;
    white-space: nowrap;
    align-items: center;
    margin: 0 10px;
`;
const Span = styled.span`
    padding-right: 10px;
    /* margin: 0 10px; */
`;

const LowerBlock = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    input[type='text'] {
        margin-bottom: 16px;
    }
`;
const TextAreaBox = styled.div`
    height: 300px;
    position: relative;
    background: red;
    flex-grow: 1;
`;
const Dummy = styled.div`
    padding: 2px;
    border: 1px solid;
    visibility: hidden;
    white-space: pre-wrap;
    overflow: hidden;
    word-wrap: break-word;
    word-break: break-all;
    &:after {
        content: ' ';
    }
`;
const TextArea = styled.textarea`
    width: 100%;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    border: none;
    resize: none;
    border: 1px solid #dadce0;
    /* overflow-wrap: break-word; */

    overflow-y: hidden;
    font: inherit;

    &:focus {
        outline: none;
    }
`;
const ButtonGroup = styled.div`
    height: 68px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    position: sticky;
    right: 0;
    left: 0;
    bottom: 0;

    button {
        height: 44px;
        padding: 0 8px;
        border-radius: 5px;
        &:hover {
            background: rgb(90, 176, 219);
        }
    }
    .btnNext {
        margin-left: 16px;
    }
`;
export default Boardgame;
