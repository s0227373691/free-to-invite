import React, { useState } from 'react';
import styled from 'styled-components';
// customize modules
import Select from './commom/baseTag/select';
import { SelectClearDefault } from './styles/selects';
import activeList from '../lib/activeList.js';
// 分類
import BoardGame from './subMenuList/free/boardgame';
import Movie from './subMenuList/free/movie';
import Concert from './subMenuList/free/concert';
import Basketball from './subMenuList/sport/basketball';
import Fighting from './subMenuList/sport/fighting';
import Running from './subMenuList/sport/running';
import Newtaipei from './subMenuList/travel/newtaipei';
import Taichung from './subMenuList/travel/taichung';
import Taipei from './subMenuList/travel/taipei';

// TODO primaryType  activeType 共用 其他動態

const NewArticle = () => {
    const [formTypeComponent, setFormTypeComponent] = useState(null);

    const handleOnChangeSelectFormType = (e) => {
        let activeFormTypeComponent = null;
        const selectedActiveType = e.target.value;

        switch (selectedActiveType) {
            case '桌游':
                activeFormTypeComponent = (
                    <BoardGame activeType={selectedActiveType} />
                );
                break;
            case '演唱會':
                activeFormTypeComponent = (
                    <Concert activeType={selectedActiveType} />
                );
                break;
            case '電影':
                activeFormTypeComponent = (
                    <Movie activeType={selectedActiveType} />
                );
                break;
            case '慢跑':
                activeFormTypeComponent = (
                    <Running activeType={selectedActiveType} />
                );
                break;
            case '籃球':
                activeFormTypeComponent = (
                    <Basketball activeType={selectedActiveType} />
                );
                break;
            case '格鬥':
                activeFormTypeComponent = (
                    <Fighting activeType={selectedActiveType} />
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
                            {subActiveList.map(({ activeType }) => (
                                <option key={activeType} value={activeType}>
                                    {activeType}
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
    padding: 15px;
    display: flex;
    flex-direction: column;
`;

const Title = styled.h2`
    font-size: 28px;
    color: #0984e3;
    font-weight: 500;
    padding: 20px 0;
`;

const FormContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;
const SelectFormType = styled(SelectClearDefault)`
    width: 100%;
    margin-bottom: 20px;
    font-size: 18px;
    background: #dadce0;
`;
