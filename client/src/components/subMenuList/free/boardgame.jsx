import React, { useState } from 'react';
import styled from 'styled-components';
import Select from '../../commom/baseTag/select';
import BaseInput from '../../commom/baseTag/Input';

// import { postBoardgameActive } from '../lib/api/auth';
import { postActiveFreeBoardGame } from '../../../lib/api/addActive/free';

const Boardgame = (props) => {
    const [date, setDate] = useState('');
    const [people, setPeople] = useState('');
    const [precautions, setPrecautions] = useState('');
    const [boardgameType, setBoardgameType] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const submitActive = async (e) => {
        e.preventDefault();
        console.log(props);
        console.log({
            primaryType: props.primaryType,
            minorType: props.minorType,
            date,
            people,
            precautions,
            boardgameType,
            title,
            content,
        });
        await postActiveFreeBoardGame({
            primaryType: props.primaryType,
            minorType: props.minorType,
            date,
            people,
            precautions,
            boardgameType,
            title,
            content,
        });
    };
    return (
        <From onSubmit={submitActive}>
            <Upperlock>
                <Label htmlFor="date">
                    <Span>日期 : </Span>
                    <Input
                        id="date"
                        type="text"
                        onChange={(e) => setDate(e.target.value)}
                    />
                </Label>
                <Label htmlFor="people">
                    <Span>人數 : </Span>
                    <Input
                        id="people"
                        type="number"
                        onChange={(e) => setPeople(e.target.value)}
                    />
                </Label>
                <Label htmlFor="precautions">
                    <Span>注意事項 : </Span>
                    <Input
                        id="precautions"
                        type="text"
                        onChange={(e) => setPrecautions(e.target.value)}
                    />
                </Label>
                <SelectTag
                    onChange={(e) => {
                        setBoardgameType(e.target.value);
                    }}
                >
                    <option value="" hidden>
                        遊戲分類
                    </option>
                    <option value="策略遊戲">策略遊戲</option>
                    <option value="益智遊戲">益智遊戲</option>
                    <option value="推理遊戲">推理遊戲</option>
                    <option value="角色扮演遊戲">角色扮演遊戲</option>
                    <option value="幼教遊戲">幼教遊戲</option>
                    <option value="小品遊戲">小品遊戲</option>
                    <option value="合作遊戲">合作遊戲</option>
                    <option value="陣營遊戲">陣營遊戲</option>
                </SelectTag>
            </Upperlock>

            <LowerBlock>
                <Input
                    type="text"
                    placeholder="標題"
                    onChange={(e) => setTitle(e.target.value)}
                />
                <TextAreaBox>
                    <Dummy>{content}</Dummy>
                    <TextArea
                        name=""
                        id=""
                        onChange={(e) => setContent(e.target.value)}
                    ></TextArea>
                </TextAreaBox>
            </LowerBlock>
            <Button>
                <button className="btnCancel">取消</button>
                <button className="btnNext">下一步</button>
            </Button>
        </From>
    );
};
const From = styled.form`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;
const SelectTag = styled(Select)``;
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
const Button = styled.footer`
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
