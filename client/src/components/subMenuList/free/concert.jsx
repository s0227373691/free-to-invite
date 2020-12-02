import React from 'react';
import styled from 'styled-components';

const Concert = () => {
    const [date, setDate] = useState('');
    const [people, setPeople] = useState('');
    const [cost, setCost] = useState('');
    const [precautions, setPrecautions] = useState('');
    const [musicSite, setMusicSite] = useState('');
    const [musicType, setMusicType] = useState('');
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
                    setMusicSite(e.target.value);
                }}
            >
                <option hidden>音樂場地</option>
                <option value="演唱會">演唱會</option>
                <option value="小型演唱會">小型演唱會</option>
                <option value="音樂廣場">音樂廣場</option>
            </Select>
            <Select
                onChange={(e) => {
                    setMusicType(e.target.value);
                }}
            >
                <option hidden>音樂類型</option>
                <option value="古典樂">古典樂</option>
                <option value="鄉村歌曲">鄉村歌曲</option>
                <option value="電音">電音</option>
                <option value="饒舌樂">饒舌樂</option>
                <option value="饒舌樂">饒舌樂</option>
                <option value="">c</option>
                <option value="">搖滾音樂</option>
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
export default Concert;
