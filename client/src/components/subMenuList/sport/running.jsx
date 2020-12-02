import React from 'react';
import styled from 'styled-components';

const Running = () => {
    const [date, setDate] = useState('');
    const [people, setPeople] = useState('');
    const [precautions, setPrecautions] = useState('');
    const [runningType, setRunningType] = useState('');
    const [runningSite, setRunningSite] = useState('');
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
                    setRunningType(e.target.value);
                }}
            >
                <option hidden>活動類型</option>
                <option value="長跑">長跑</option>
                <option value="短跑"> 短跑</option>
                <option value="馬拉松">馬拉松 </option>
            </Select>
            <Select
                onChange={(e) => {
                    setRunningSite(e.target.value);
                }}
            >
                <option value="" hidden>
                    跑步路型
                </option>
                <option value="公路">公路</option>
                <option value="操場">操場</option>
                <option value="室內">室內</option>
                <option value="運動中心">運動中心</option>
            </Select>
            <Selec
                onChange={(e) => {
                    setDifficulty(e.target.value);
                }}
                t
            >
                <option value="" hidden>
                    難度
                </option>
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
export default Running;
