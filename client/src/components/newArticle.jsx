import React, { useState } from 'react';
import styled from 'styled-components';
// customize modules
import Select from './commom/baseTag/select';
import activeList from '../lib/activeList.js';
// 分類
import Boardgame from './subMenuList/free/boardgame';
import Concert from './subMenuList/free/concert';
import Shopping from './subMenuList/free/shopping';
import Basketball from './subMenuList/sport/basketball';
import Fighting from './subMenuList/sport/fighting';
import Running from './subMenuList/sport/running';
import Newtaipei from './subMenuList/travel/newtaipei';
import Taichung from './subMenuList/travel/taichung';
import Taipei from './subMenuList/travel/taipei';

import { x } from 'joi';
// TODO primaryType  minorType 共用 其他動態

const NewArticle = () => {
    const [primaryType, setPrimaryType] = useState('');
    const [minorType, setMinorType] = useState('');
    const [formType, setFormType] = useState('');
    return (
        <Container>
            <Title className="title">新增活動</Title>{' '}
            <UpperBlock>
                <SelectPrimaryType
                    required
                    onChange={(e) => {
                        setPrimaryType(e.target.value);
                    }}
                >
                    <option value="" hidden>
                        主分類
                    </option>
                    {activeList.map((x) => {
                        return (
                            <option value={x.primaryType} key={x.primaryType}>
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
                                switch (e.target.value) {
                                    case '桌游':
                                        setFormType(
                                            <Boardgame
                                                primaryType={primaryType}
                                                minorType={minorType}
                                            />
                                        );
                                        break;
                                    case '購物':
                                        setFormType(
                                            <Shopping
                                                primaryType={primaryType}
                                                minorType={minorType}
                                            />
                                        );
                                        break;
                                    case '演唱會':
                                        setFormType(
                                            <Concert
                                                primaryType={primaryType}
                                                minorType={minorType}
                                            />
                                        );
                                        break;
                                    case '慢跑':
                                        setFormType(
                                            <Running
                                                primaryType={primaryType}
                                                minorType={minorType}
                                            />
                                        );
                                        break;
                                    case '籃球':
                                        setFormType(
                                            <Basketball
                                                primaryType={primaryType}
                                                minorType={minorType}
                                            />
                                        );
                                        break;
                                    case '格鬥':
                                        setFormType(
                                            <Fighting
                                                primaryType={primaryType}
                                                minorType={minorType}
                                            />
                                        );
                                        break;
                                }
                            }}
                        >
                            <option value="" hidden>
                                次分類
                            </option>
                            {activeList[
                                activeList
                                    .map((x) => x.primaryType)
                                    .indexOf(primaryType)
                            ].subActiveList.map((x) => {
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
            </UpperBlock>
            {formType}
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

const UpperBlock = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
`;
const SelectPrimaryType = styled(Select)``;
const SelectMinorType = styled(Select)``;

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
