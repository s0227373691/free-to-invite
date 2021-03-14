import React from 'react';
import styled from 'styled-components';

const badmintonList = ({ activeList }) => {
    console.log(activeList);
    return (
        <ActiveList>
            {activeList.map((active) => {
                const {
                    _id,
                    title,
                    place,
                    badmintonType,
                    population,
                    cost,
                } = active;
                return (
                    <Active key={_id}>
                        <h2>活動標題: {title}</h2>
                        <div>地點: {place}</div>
                        <div>球種: {badmintonType}</div>
                        <div>人數: {population}</div>
                        <div>費用: {cost}</div>
                    </Active>
                );
            })}
        </ActiveList>
    );
};

export default badmintonList;

const ActiveList = styled.ul``;
const Active = styled.li`
    margin-bottom: 20px;
`;
