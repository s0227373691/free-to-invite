import React, { useState } from 'react';
import styled from 'styled-components';
import Select from '../../commom/baseTag/select';
import BaseInput from '../../commom/baseTag/Input';
const Shopping = () => {
    const [date, setDate] = useState('');
    const [people, setPeople] = useState('');
    const [cost, setCost] = useState('');
    const [precautions, setPrecautions] = useState('');
    const [shoppingType, setShoppingType] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    return (
        <>
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
                        setShoppingType(e.target.value);
                    }}
                >
                    <option hidden>購物類型</option>
                    <option value="百貨公司">百貨公司</option>
                    <option value="大賣場">大賣場</option>
                    <option value="夜市">夜市</option>
                    <option value="菜市場">菜市場</option>
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
            </LowerBlock>{' '}
            <Footer>
                <button className="btnCancel">取消</button>
                <button className="btnNext">下一步</button>
            </Footer>
        </>
    );
};

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
export default Shopping;
