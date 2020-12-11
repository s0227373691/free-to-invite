import React, { useState } from 'react';
import styled from 'styled-components';

// import dateFormat from 'dateformat';
import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const Landmark = ({ icon, text }) => (
    <div>
        <img style={{ height: '30px', width: '30px' }} src={icon} />
        <div>{text}</div>
    </div>
);

import { SelectClearDefault } from '../styles/selects';
import { ButtonClearDefault } from '../styles/buttons';
import { TextareaClearDefault } from '../styles/textarea';

import { postNewActiveBoardGame } from '../../lib/api/newActive/boardGame';
import { InputClearDefault } from '../styles/inputs';

const Boardgame = (props) => {
    // 當地圖載入完成，將地圖實體與地圖 API 傳入 state 供之後使用
    const mapHasLoaded = (map, maps) => {
        setMapInstance(map);
        setMapApi(maps);
        setMapApiLoaded(true);
    };
    // 用來處理移動事件發生時重新更新 myPosition 的值，而這個更新值就是我地圖視角正中心點的值，需要從 mapInstance 中去取
    const handleMapCenterChange = () => {
        if (mapApiLoaded) {
            setMyPosition({
                //TODO  center 底下的 lat() 與 lng() 方法可以回傳現下地圖正中心點的經緯度
                lat: mapInstance.center.lat(),
                lng: mapInstance.center.lng(),
            });
        }
    };
    //TODO  預設位置
    const [myPosition, setMyPosition] = useState({
        lat: 25.04,
        lng: 121.5,
    });

    const findLocation = () => {
        if (mapApiLoaded) {
            //  new 一個 service 時將 mapInstance 當作參數放入 mapApi.places.PlacesService，代表我們以這個地圖當作參考
            const service = new mapApi.places.PlacesService(mapInstance);
            const request = {
                location: myPosition, // 搜尋時以何者為中心
                radius: 5000, // 搜尋半徑，以公尺為單位
                type: ['新北市五股區水碓路16巷36號2樓'], // 要搜尋的地標
                // 其他參數文件 https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceSearchRequest。
            };
            // nearbySearch 是 places.PlacesService 底下提供的一個方法，第一個參數是一個 Request，第二個參數是一個 Callback Function，在回傳 Response 後執行，
            service.nearbySearch(request, (results, status) => {
                // status 是搜尋狀況，如果成功搜尋值會是 "OK"
                if (status === mapApi.places.PlacesServiceStatus.OK) {
                    console.log(results); // 地標或商家的資訊20筆 (result 詳細介紹 https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceResult )
                    setPlaces(results);
                }
            });
        }
    };

    const [mapInstance, setMapInstance] = useState(null);
    const [mapApi, setMapApi] = useState(null);
    const [mapApiLoaded, setMapApiLoaded] = useState(false);

    // 附近地標或店家的資訊
    const [places, setPlaces] = useState([]);

    //TODO  const now = dateFormat(new Date(), 'isoDate');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [registerDeadline, setRegisterDeadline] = useState('');

    const [population, setPopulation] = useState('');
    const [boardGameType, setBoardGameType] = useState('');
    const [cost, setCost] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#9b9b9b');
    const [newBoardGameType, setNewBoardGameType] = useState('');
    const [newBoardGameName, setNewBoardGameName] = useState('');
    const [addedBoardGameList, setAddedBoardGameList] = useState([]);
    const boardGameTypeList = [
        { type: '派對', color: '#efd100d6' },
        { type: '策略', color: '#00efe3' },
        { type: '情境', color: '#58ef00' },
        { type: '戰爭', color: '#5400ef' },
        { type: '抽象', color: '#e700ef' },
        { type: '交換卡片', color: '#ef0034' },
        { type: '兒童', color: '#0070ef' },
        { type: '家庭', color: '#ef4400' },
        { type: '其他', color: '#1000ef' },
    ];

    const setBoardGameColor = (boardGameType) => {
        const { color } = boardGameTypeList.find(
            ({ type }) => type === boardGameType
        );
        setBackgroundColor(color);
    };

    const handleChangeSelectBoardGameType = (e) => {
        const { value } = e.target;
        setBoardGameColor(value);
        setNewBoardGameType(value);
    };

    const handleClickButtonNewBoardGame = () => {
        if (!newBoardGameType) return alert('請選擇桌遊類型');
        if (!newBoardGameName) return alert('請輸入桌遊名稱');
        const newAddedBoardGameList = [
            ...addedBoardGameList,
            {
                type: newBoardGameType,
                name: newBoardGameName,
                background: backgroundColor,
            },
        ];
        setAddedBoardGameList(newAddedBoardGameList);
        setNewBoardGameType('');
        setNewBoardGameName('');
        setBackgroundColor('#9b9b9b');
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await postNewActiveBoardGame({
            activeType: props.activeType,
            date,
            population,
            boardGameType,
            title,
            content,
        });
    };

    return (
        <Form onSubmit={handleSubmit}>
            <div style={{ height: '400px', width: '400px' }}>
                <GoogleMapReact
                    yesIWantToUseGoogleMapApiInternals={true} //TODO  設定為 true
                    bootstrapURLKeys={{
                        key: 'AIzaSyDbatx1g_dDPpQIz6mTPgECwjhXgqUjlrU', // API Key
                        libraries: ['places'], // 如果我們要啟用 API 功能需要再 bootstrapURLKeys 屬性增加 libraries 陣列，陣列裡面的值可以讓我們啟用要使用的 API
                    }}
                    defaultCenter={{
                        lat: 25.04, //TODO 預設地圖視角，也就是一打開會先看到哪個地區
                        lng: 121.5, //TODO  預設地圖視角，也就是一打開會先看到哪個地區
                    }}
                    defaultZoom={17} //TODO  預設縮放視角
                    onGoogleApiLoaded={(
                        { map, maps } //TODO  onGoogleApiLoaded 載入完成後執行
                    ) => mapHasLoaded(map, maps)} // map 是個物件，指的就是現在看到的這張地圖，如果要取得這張地圖的資訊，就需要取得這個物件的資訊或方法來使用， maps 也是物件，指的是 Google Maps API，裡面有許多我們可以調用的方法，可以利用它來使用搜尋附近的地標資訊等等
                    onChange={handleMapCenterChange} //TODO  移動地圖邊界時觸發 handleMapCenterChange
                >
                    <AnyReactComponent
                        lat={myPosition.lat} //TODO 　緯度
                        lng={myPosition.lng} //TODO  經度
                        text="My Marker"
                    />

                    {places.map((item, index) => (
                        <Landmark
                            icon={item.icon}
                            key={index}
                            lat={item.geometry.location.lat()}
                            lng={item.geometry.location.lng()}
                            text={item.name}
                            placeId={item.place_id}
                        />
                    ))}
                </GoogleMapReact>
            </div>
            <input type="button" value="找咖啡廳" onClick={findLocation} />

            <Input
                type="datetime-local"
                placeholder="開始時間"
                // min={now}
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
            />
            <Input
                type="datetime-local"
                placeholder="結束時間"
                // min={now}
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
            />
            <Input
                type="datetime-local"
                placeholder="報名截止時間"
                // min={now}
                value={registerDeadline}
                onChange={(e) => setRegisterDeadline(e.target.value)}
                required
            />

            <Input
                type="text"
                placeholder="標題"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />

            <Input
                placeholder="人數"
                type="number"
                value={population}
                onChange={(e) => setPopulation(e.target.value)}
            />
            <Input
                placeholder="參加費用"
                type="number"
                value={cost}
                onChange={(e) => setCost(e.target.value)}
            ></Input>
            <NewBoardGame>
                <SelectBoardGameType
                    style={{ background: backgroundColor }}
                    value={newBoardGameType}
                    onChange={handleChangeSelectBoardGameType}
                >
                    <option value="" hidden>
                        請選擇桌遊類型
                    </option>
                    {boardGameTypeList.map(({ type }) => (
                        <option key={type} value={type}>
                            {type}
                        </option>
                    ))}
                </SelectBoardGameType>
                <InputBoardGameName
                    placeholder="桌遊名稱..."
                    type="text"
                    value={newBoardGameName}
                    onChange={(e) => setNewBoardGameName(e.target.value)}
                />
                <ButtonNewBoardGame
                    style={{ backgroundColor: backgroundColor }}
                    onClick={handleClickButtonNewBoardGame}
                >
                    新增
                </ButtonNewBoardGame>
            </NewBoardGame>
            <AddedBoardGame>
                {addedBoardGameList.map((boardGame, i) => {
                    const { type, name, background } = boardGame;
                    return (
                        <AddedBoardGameItem
                            key={i}
                            style={{ background: background }}
                        >
                            <span style={{ marginRight: '10px' }}>
                                {type}
                                {name}
                            </span>
                            <BtnDeleteTag
                                onClick={() => {
                                    const newAddedBoardGameList = [
                                        ...addedBoardGameList,
                                    ];
                                    newAddedBoardGameList.splice(i, 1);
                                    setAddedBoardGameList(
                                        newAddedBoardGameList
                                    );
                                }}
                            >
                                X
                            </BtnDeleteTag>
                        </AddedBoardGameItem>
                    );
                })}
            </AddedBoardGame>
            <TextArea
                placeholder="補充說明..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
            ></TextArea>
            <Button type="submit">新增</Button>
        </Form>
    );
};
const Form = styled.form`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

const Input = styled(InputClearDefault)`
    padding: 15px 10px;
    margin-bottom: 20px;
    border: 0px solid #dadce0;
    font-size: 25px;
`;

const NewBoardGame = styled.div`
    display: flex;
`;
const SelectBoardGameType = styled(SelectClearDefault)`
    margin-bottom: 20px;
    font-size: 18px;
    color: #ffffff;
`;
const InputBoardGameName = styled(Input)`
    font-size: 20px;
`;
const ButtonNewBoardGame = styled.div`
    width: 90px;
    padding: 10px 15px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 18px;
    color: #ffffff;
    box-sizing: border-box;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
    &:active {
        opacity: 1;
    }
`;

const AddedBoardGame = styled.div`
    display: flex;
    margin-bottom: 20px;
    padding: 8px;
`;

const AddedBoardGameItem = styled.div`
    margin-right: 10px;
    padding: 8px 12px;
    border-radius: 5px;
    font-size: 18px;
    color: white;
`;

const TextArea = styled(TextareaClearDefault)`
    width: 100%;
    height: 300px;
    margin-bottom: 20px;
    font-size: 20px;
    border: 0px;
`;
const Button = styled(ButtonClearDefault)`
    width: 80px;
    margin-left: auto;
    padding: 10px 15px;
    border-radius: 5px;
    color: white;
    background: rgb(14, 145, 210);
    font-size: 15px;

    &:hover {
        background: rgb(90, 176, 219);
    }
    &:active {
        background: rgb(14, 145, 210);
    }
`;

const BtnDeleteTag = styled.span`
    &:hover {
        color: grey;
        cursor: pointer;
    }
`;

export default Boardgame;
