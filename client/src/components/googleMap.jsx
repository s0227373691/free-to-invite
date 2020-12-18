import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { InputClearDefault } from '../styles/inputs';

import IconPlace from '../../assets/svg/place';

// -------------------------------------------------------------------------------------------------
//標題 人數 時間 地點 補充說明
import GoogleMapReact from 'google-map-react';

const GoogleMap = (props) => {
    // 當地圖載入完成，將地圖實體與地圖 API 傳入 state 供之後使用
    const [mapInstance, setMapInstance] = useState(null);
    const [mapApi, setMapApi] = useState(null);
    const [mapApiLoaded, setMapApiLoaded] = useState(false);
    const mapHasLoaded = (map, maps) => {
        setMapInstance(map);
        setMapApi(maps);
        setMapApiLoaded(true);
    };

    // 用來處理移動事件發生時重新更新 centerPoint 的值，而這個更新值就是我地圖視角正中心點的值，需要從 mapInstance 中去取
    const [currentCenter, setCurrentCenter] = useState({
        lat: 25.0727686,
        lng: 121.4338821,
    });
    const [centerPoint, setCenterPoint] = useState({
        lat: 25.0727686,
        lng: 121.4338821,
    });
    const handleMapCenterChange = () => {
        if (mapApiLoaded) {
            setCenterPoint({
                lat: mapInstance.center.lat(),
                lng: mapInstance.center.lng(),
            });
        }
    };

    //TODO 當中心點改變時抓取附近店家資訊
    const [landMark, setLandMark] = useState([]);
    useEffect(() => {
        findLocation();
    }, [centerPoint]);
    const findLocation = () => {
        if (mapApiLoaded) {
            //TODO  new 一個 service 時將 mapInstance 當作參數放入 mapApi.places.PlacesService，代表以這個地圖當作參考
            const service = new mapApi.places.PlacesService(mapInstance);
            const request = {
                location: centerPoint, //TODO 搜尋時以何者為中心
                radius: 1000, //TODO 搜尋半徑，以公尺為單位
                type: ['cafe', 'food'], //TODO 要搜尋的地標
                //TODO 其他參數文件 https://developers.google.com/maps/documentation/javascript/reference/places-service#PlaceSearchRequest。
            };
            service.nearbySearch(request, (results, status) => {
                //TODO status 是搜尋狀況，如果成功搜尋值會是 "OK"
                if (status === mapApi.places.PlacesServiceStatus.OK) {
                    setLandMark(results);
                }
            });
        }
    };

    // 處理預先顯示搜尋條件(資料長度為5) 這些返回的 資料沒有經緯度需要靠 place_id 來找出經緯度以建立標記
    const [searchMapText, setSearchMapText] = useState('');
    const [preSearchResult, setPreSearchResult] = useState([]);
    useEffect(() => {
        handleAutocomplete();
    }, [searchMapText]);
    const handleAutocomplete = () => {
        if (mapApiLoaded) {
            const service = new mapApi.places.AutocompleteService();
            const request = { input: searchMapText };
            service.getPlacePredictions(request, (results, status) => {
                setPreSearchResult(results);
            });
        }
    };

    // 地圖位置
    const searchLocation = () => {
        const geocoder = new mapApi.Geocoder();
        geocoder.geocode(
            {
                address: searchMapText,
                componentRestrictions: {
                    country: 'TW',
                },
            },
            (results, status) => {
                if (status === 'OK') {
                    setCenterPoint({
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng(),
                    });
                    setCurrentCenter(centerPoint);
                    console.log(results[0].geometry.location.lat());
                    console.log(results[0].geometry.location.lng());
                }
            }
        );
    };

    return (
        <Dummy>
            <Label>
                <Icon src={IconPlace} />
                <Input
                    type="text"
                    onChange={(e) => setSearchMapText(e.target.value)}
                />
                <ButtonSearchMap
                    onClick={searchLocation}
                    onChange={handleAutocomplete}
                >
                    搜尋
                </ButtonSearchMap>
            </Label>
            <GoogleMap>
                {preSearchResult && searchMapText
                    ? preSearchResult.map((item, index) => (
                          <div key={index} dataid={item.place_id}>
                              {item.description}
                          </div>
                      ))
                    : null}

                <GoogleMapReact
                    yesIWantToUseGoogleMapApiInternals={true} //TODO  使用google map api 設定為 true
                    // options={{ mapTypeId: 'roadmap' }} // roadmap 路線圖 ， hybrid : 衛星圖
                    bootstrapURLKeys={{
                        key: 'AIzaSyDbatx1g_dDPpQIz6mTPgECwjhXgqUjlrU', // API Key
                        libraries: ['places'], // 如果要啟用 API 功能需要再 bootstrapURLKeys 屬性增加 libraries 陣列，陣列裡面的值可以讓我們啟用要使用的 API
                    }}
                    defaultZoom={17} //TODO  預設縮放視角
                    onGoogleApiLoaded={(
                        { map, maps } //TODO  onGoogleApiLoaded 載入完成後調用 google map 核心方法
                    ) => mapHasLoaded(map, maps)} //TODO map 是個物件，指的是現在看到的這張地圖，如果要取得這張地圖的資訊，就需要取得這個物件的資訊或方法來使用，maps 也是物件，指的是 Google Maps API，裡面有許多可調用的方法，可以利用它來使用搜尋附近的地標資訊等等
                    onChange={handleMapCenterChange} //TODO  移動地圖邊界時觸發 handleMapCenterChange
                    center={currentCenter} // 目前地圖整體位置
                >
                    {landMark.map((item, index) => (
                        <LandMark
                            key={index}
                            lat={item.geometry.location.lat()}
                            lng={item.geometry.location.lng()}
                        >
                            <Img
                                style={{ height: '30px', width: '30px' }}
                                icon={item.icon}

                                // placeId={item.place_id}
                            />
                            <Name>{item.name}</Name>
                        </LandMark>
                    ))}

                    <Mark lat={centerPoint.lat} lng={centerPoint.lng}>
                        My Marker
                    </Mark>
                </GoogleMapReact>
            </GoogleMap>
        </Dummy>
    );
};
const Img = styled.img``;
const Name = styled.div``;
const LandMark = styled.div``;
const GoogleMap = styled.div`
    width: 100%;
    height: 400px;
`;
const Mark = styled.div``;
const Icon = styled.img`
    width: 40px;
`;
const Label = styled.label`
    display: flex;
    margin-bottom: 20px;
`;
const Dummy = styled.form`
    max-width: 768px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;
const ButtonSearchMap = styled.div`
    width: 90px;
    padding: 10px 15px;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    font-size: 18px;
    color: #fff;
    background-color: rgb(155, 155, 155);
    box-sizing: border-box;

    &:hover {
        opacity: 0.7;
        cursor: pointer;
    }
    &:active {
        opacity: 1;
    }
`;
const Input = styled(InputClearDefault)`
    margin: 0 30px;
    padding: 15px 0;
    border: 0px solid #dadce0;
    font-size: 25px;
`;

export default GoogleMap;
