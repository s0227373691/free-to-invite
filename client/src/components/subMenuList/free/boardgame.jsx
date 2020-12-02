import React from 'react';
import styled from 'styled-components';

const Boardgame = () => {
    const [date, setDate] = useState('');
    const [people, setPeople] = useState('');
    const [precautions, setPrecautions] = useState('');
    const [boardgameType, setBoardgameType] = useState('');
    return (
        <Container>
            Boardgame
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
                    setBoardgameType(e.target.value);
                }}
            >
                <option value="" hidden>
                    遊戲分類
                </option>
                <option value="策略遊戲">策略遊戲</option>
                <option value="益智遊戲">益智遊戲</option>
                <option value="推理遊戲">推理遊戲</option>
                <option value="角色扮演遊戲">角色扮演遊戲</option>
                <option value="幼教遊戲">幼教遊戲</option>
                <option value="小品遊戲">小品遊戲</option>
                <option value="合作遊戲">合作遊戲</option>
                <option value="陣營遊戲">陣營遊戲</option>
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

export default Boardgame;
