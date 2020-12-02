import React from 'react';
import styled from 'styled-components';

const Fighting = () => {
    const [date, setDate] = useState('');
    const [people, setPeople] = useState('');
    const [precautions, setPrecautions] = useState('');
      const [cost, setCost] = useState('');
    const [difficulty, setDifficulty] = useState('');
    const [appliance, setAppliance] = useState('');
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
                <Label htmlFor="cost">
                    <Span>費用 : </Span>
                    <Input
                        id="cost"
                        type="text"
                        onChange={(e) => setCost(e.target.value)}
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
                    setDifficulty(e.target.value);
                }}
            >
                <option value="" hidden>
                    器具
                </option>
                <option value="自行準備">自行準備</option>
                <option value="現場提供">現場提供</option>
            </Select>
            <Select
                onChange={(e) => {
                    setAppliance(e.target.value);
                }}
            >
                <option hidden>難度</option>
                <option value="專業">專業</option>
                <option value="一般">一般</option>
                <option value="初學者">初學者</option>
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
export default Fighting;
