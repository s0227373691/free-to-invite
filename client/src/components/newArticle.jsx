import React, { useState } from 'react';
import styled from 'styled-components';
import Axios from 'axios';
import Button from './commom/baseTag/button';
import BaseInput from './commom/baseTag/Input';
import Select from './commom/baseTag/select';
import activeList from '../lib/activeList.js';

import { x } from 'joi';
// TODO primaryType  minorType 共用 其他動態
const NewArticle = () => {
    const [primaryType, setPrimaryType] = useState('');
    const [minorType, setMinorType] = useState('');
    const [date, setDate] = useState('');
    const [people, setPeople] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = (e) => {
        if (minorType === '') {
            alert('請選擇minorprimary');
            return;
        }
        console.log(primaryType, minorType, date, people, title, content);
        Axios.post('http://localhost:3000/api/newarticle', {
            primaryType,
            minorType,
            date,
            people,
            title,
            content,
        })
            .then((res) => {
                alert('上傳成功');
            })
            .catch((err) => {
                console.error(err);
            });
    };
    return (
        <Container>
            <Title className="title">新增活動</Title>{' '}
            <Form onSubmit={handleSubmit}>
                <Upperlock>
                    <SelectPrimaryType
                        required
                        onChange={(e) => {
                            setPrimaryType(e.target.value);
                        }}
                    >
                        <option value="" hidden>
                            請選擇分類
                        </option>
                        {activeList.map((x) => {
                            return (
                                <option
                                    value={x.primaryType}
                                    key={x.primaryType}
                                >
                                    {x.primaryType}
                                </option>
                            );
                        })}
                    </SelectPrimaryType>

                    {primaryType ? (
                        <>
                            <SelectMinorType
                                required
                                onChange={(e) => {
                                    setMinorType(e.target.value);
                                }}
                            >
                                <option value="" hidden>
                                    請選擇minorprimary
                                </option>
                                {activeList[
                                    activeList
                                        .map((x) => x.primaryType)
                                        .indexOf(primaryType)
                                ].subActiveList.map((x) => {
                                    console.log(x);
                                    return (
                                        <option
                                            value={x.primaryType}
                                            key={x.minorType}
                                        >
                                            {x.minorType}
                                        </option>
                                    );
                                })}
                            </SelectMinorType>
                        </>
                    ) : null}

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
            </Form>
            <Footer>
                <button className="btnCancel">取消</button>
                <button className="btnNext">下一步</button>
            </Footer>
        </Container>
    );
};
export default NewArticle;
const Container = styled.div`
    max-width: 800px;
    min-height: calc(100vh - 80px);
    margin: 0 auto;
    display: flex;
    flex-direction: column;
`;
const Title = styled.h2`
    font-size: 28px;
    padding: 20px 0;
    text-align: center;
    border-bottom: 1px solid black;
    margin-bottom: 20px;
    font-weight: 700;
`;
const Form = styled.form`
    height: 100%;
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    position: relative;
    padding: 0 10px;
`;
const Upperlock = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
`;
const SelectPrimaryType = styled(Select)``;
const SelectMinorType = styled(Select)``;
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

const SendBtn = styled(Button)`
    border-radius: 5px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid #b2bec3;
`;

const Footer = styled.footer`
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
