import React from 'react';
import styled from 'styled-components';

const Basketball = () => {
    const [date, setDate] = useState('');
    const [people, setPeople] = useState('');
    const [precautions, setPrecautions] = useState('');
    const [boardgameType, setBoardgameType] = useState('');
    const [basketballRole, setBasketballRole] = useState('');
    const [difficulty, setDifficulty] = useState('');
    return (
        <Container>
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
            </Upperlock>
            <Select
                onChange={(e) => {
                    setBasketballRole(e.target.value);
                }}
            >
                <option hidden>籃球規則</option>
                <option value="正式比賽">正式比賽</option>
                <option value="3 v 3">3 v 3</option>
                <option value="5 v 5">5 v 5</option>
            </Select>
            <Select
                onChange={(e) => {
                    setDifficulty(e.target.value);
                }}
            >
                <option hidden>難度</option>
                <option value="專業">專業</option>
                <option value="一般">一般</option>
                <option value="" 初學者>
                    初學者
                </option>
            </Select>
        </Container>
    );
};
const Container = styled.div``;
const Select = styled(Select)``;
const Upperlock = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
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
export default Basketball;
