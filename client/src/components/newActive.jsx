import React, { useState } from 'react';
import styled from 'styled-components';
import { useRouteMatch, Switch, Route } from 'react-router-dom';

import { SelectClearDefault } from './styles/selects';

import Badminton from './newActive/badminton';
import Boardgame from './newActive/boardgame';
import Movie from './newActive/movie';
import Mahjong from './newActive/mahjong';
import Basketball from './newActive/basketball';
import Running from './newActive/running';
import StreetDance from './newActive/streetDance';
import Drink from './newActive/drink';

const NewArticle = () => {
    const { url } = useRouteMatch();
    const handleOnChangeFormType = (e) => {
        const setUrl = `/#${url}/${e.target.value}`;
        location.href = setUrl;
    };

    return (
        <Container>
            <Title>新增活動</Title>
            <FormContainer>
                <SelectFormType onChange={handleOnChangeFormType} required>
                    <option hidden>請選擇活動類型</option>
                    <optgroup label="娛樂">
                        <option value="boardgame">桌遊</option>
                        <option value="movie">電影</option>
                        <option value="mahjong">麻將</option>
                        <option value="streetdance">街舞</option>
                    </optgroup>
                    <optgroup label="運動">
                        <option value="running">慢跑</option>
                        <option value="badminton">羽球</option>
                        <option value="basketball">籃球</option>
                    </optgroup>
                    <optgroup label="休閒">
                        <option value="drink">喝酒</option>
                    </optgroup>
                </SelectFormType>
                <Switch>
                    <Route path={`${url}/badminton`} component={Badminton} />
                    <Route path={`${url}/boardgame`} component={Boardgame} />
                    <Route path={`${url}/movie`} component={Movie} />
                    <Route path={`${url}/mahjong`} component={Mahjong} />
                    <Route path={`${url}/basketball`} component={Basketball} />
                    <Route path={`${url}/running`} component={Running} />
                    <Route
                        path={`${url}/streetDance`}
                        component={StreetDance}
                    />
                    <Route path={`${url}/drink`} component={Drink} />
                </Switch>
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
