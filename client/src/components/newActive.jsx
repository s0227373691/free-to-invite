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

// TODO primaryType  minorType 共用 其他動態

const NewArticle = () => {
    const [formTypeComponent, setFormTypeComponent] = useState(null);

    const handleOnChangeSelectFormType = (e) => {
        let activeFormTypeComponent = null;
        const selectedActiveType = e.target.value;

        switch (selectedActiveType) {
            case '桌游':
                activeFormTypeComponent = (
                    <Boardgame minorType={selectedActiveType} />
                );
                break;
            case '購物':
                activeFormTypeComponent = (
                    <Shopping minorType={selectedActiveType} />
                );
                break;
            case '演唱會':
                activeFormTypeComponent = (
                    <Concert minorType={selectedActiveType} />
                );
                break;
            case '慢跑':
                activeFormTypeComponent = (
                    <Running minorType={selectedActiveType} />
                );
                break;
            case '籃球':
                activeFormTypeComponent = (
                    <Basketball minorType={selectedActiveType} />
                );
                break;
            case '格鬥':
                activeFormTypeComponent = (
                    <Fighting minorType={selectedActiveType} />
                );
                break;
            default:
                setFormTypeComponent(<p>無此新增活動表單component</p>);
                throw new Error('select value no matching case');
        }

        setFormTypeComponent(activeFormTypeComponent);
    };

    return (
        <Container>
            <Title>新增活動</Title>
            <FormContainer>
                <SelectFormType
                    onChange={handleOnChangeSelectFormType}
                    required
                >
                    <option hidden>請選擇活動類型</option>
                    {activeList.map(({ primaryType, subActiveList }) => (
                        <optgroup key={primaryType} label={primaryType}>
                            {subActiveList.map(({ minorType }) => (
                                <option key={minorType} value={minorType}>
                                    {minorType}
                                </option>
                            ))}
                        </optgroup>
                    ))}
                </SelectFormType>
                {formTypeComponent}
            </FormContainer>
        </Container>
    );
};
export default NewArticle;

const Container = styled.div`
    max-width: 800px;
    min-height: calc(100vh - 80px);
    margin: 0 auto;
    padding: 40px 0;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    font-size: 28px;
    color: #0984e3;
    margin-bottom: 30px;
    font-weight: 500;
`;

const FormContainer = styled.div`
    padding: 20px;
`;
const SelectFormType = styled(Select)`
    width: 100%;
    margin-bottom: 20px;
    font-size: 18px;
`;
