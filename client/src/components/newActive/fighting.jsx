import React, { useState } from 'react';
import styled from 'styled-components';

import Select from '../commom/baseTag/select';
import BaseInput from '../commom/baseTag/Input';

<<<<<<< HEAD:client/src/components/subMenuList/sport/fighting.jsx
import { postActiveFighting } from '../../../lib/api/addActive/sport/fighting';
=======
// import { postActiveFreeBoardGame } from '../../../lib/api/addActive/free/boardgame';
>>>>>>> 15ddf1cd4dc7b912279bb5939270b50aad926fc4:client/src/components/newActive/fighting.jsx

const Boardgame = (props) => {
    const [date, setDate] = useState('');
    const [population, setPopulation] = useState('');
    const [precautions, setPrecautions] = useState('');
    const [fightingType, setFightingeType] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        await postActiveFighting({
            minorType: props.minorType,
            fightingType,
            date,
            people: population,
            precautions,
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
                <Select onChange={(e) => setFightingeType(e.target.value)}>
                    <option hidden>請選擇格鬥類型</option>
                    <option value="綜合">綜合</option>
                    <option value="自由搏擊">自由搏擊</option>
                    <option value="拳擊">拳擊</option>
                    <option value="柔道">柔道</option>
                    <option value="跆拳道">跆拳道</option>
                    <option value="散打">散打</option>
                </Select>
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
