import React, { useState } from 'react';
import styled from 'styled-components';

import Select from '../commom/baseTag/select';
import BaseInput from '../commom/baseTag/Input';

import { postNewActiveMovie } from '../../lib/api/newActive/movie';

const Boardgame = (props) => {
    const [date, setDate] = useState('');
    const [population, setPopulation] = useState('');
    const [precautions, setPrecautions] = useState('');
    const [movieType, setMovieType] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        await postNewActiveMovie({
            activeType: props.activeType,
            date,
            people: population,
            precautions,
            movieType,
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
                <Select onChange={(e) => setMovieType(e.target.value)}>
                    <option hidden>請選擇電影類型</option>
                    <option value="動作片">動作片</option>
                    <option value="冒險片">冒險片</option>
                    <option value="喜劇片">喜劇片</option>
                    <option value="角色扮演">角色扮演</option>
                    <option value="劇情片">劇情片</option>
                    <option value="恐怖片">恐怖片</option>
                    <option value="奇幻片"> 奇幻片</option>
                    <option value="愛情片">愛情片</option>
                    <option value="愛情片">動畫片</option>
                    <option value="愛情片">驚悚片</option>
                    <option value="愛情片">懸疑片</option>
                    <option value="愛情片">科幻片</option>
                    <option value="愛情片">歌舞劇、音樂片</option>
                    <option value="愛情片">戰爭片</option>
                    <option value="愛情片">歷史電影</option>
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
