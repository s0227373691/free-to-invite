import React, { useState } from 'react';
import styled from 'styled-components';

import { SelectClearDefault } from './styles/selects';
import activeTypeList from '../lib/activeTypeList.js';

const NewArticle = () => {
    const [formTypeComponent, setFormTypeComponent] = useState(null);

    const handleOnChangeSelectFormType = (e) => {
        let activeFormComponent = null;
        const activeType = e.target.value;

        let newActiveList = [];
        for (const { activeList } of activeTypeList) {
            newActiveList = newActiveList.concat(activeList);
        }

        const findedActive = newActiveList.find(
            ({ name }) => name === activeType
        );
        activeFormComponent = findedActive.formComponent(activeType);
        setFormTypeComponent(activeFormComponent);
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
                    {activeTypeList.map(({ type, activeList }) => (
                        <optgroup key={type} label={type}>
                            {activeList.map(({ name }) => (
                                <option key={name} value={name}>
                                    {name}
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
