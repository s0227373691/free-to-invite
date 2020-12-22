import React, { useState } from 'react';
import styled from 'styled-components';

import { InputClearDefault } from './styles/inputs';

import IconPlace from '../assets/svg/place';

import GoogleMapReact from 'google-map-react';

const Googlemap = (props) => {
    const [mapInstance, setMapInstance] = useState(null);
    const [mapApi, setMapApi] = useState(null);
    const [mapApiLoaded, setMapApiLoaded] = useState(false);
    const [currentCenter, setCurrentCenter] = useState({
        lat: 25.0727686,
        lng: 121.4338821,
    });
    const [centerPoint, setCenterPoint] = useState({
        lat: 25.0727686,
        lng: 121.4338821,
    });
    const [searchMapText, setSearchMapText] = useState('');
    const mapHasLoaded = (map, maps) => {
        setMapInstance(map);
        setMapApi(maps);
        setMapApiLoaded(true);
    };
    const searchLocation = () => {
        console.log(searchMapText);
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
                    setCurrentCenter({
                        lat: results[0].geometry.location.lat(),
                        lng: results[0].geometry.location.lng(),
                    });
                }
            }
        );
    };

    const handleMapCenterChange = () => {
        if (mapApiLoaded) {
        }
    };

    const handleClickMap = (e) => {
        console.log(e);
        if (mapApiLoaded) {
            setCenterPoint({
                lat: e.lat,
                lng: e.lng,
            });
            setCurrentCenter({
                lat: e.lat,
                lng: e.lng,
            });
            const geocoder = new mapApi.Geocoder();
            console.log(geocoder);
            geocoder.geocode(
                {
                    address: searchMapText,
                    componentRestrictions: {
                        country: 'TW',
                    },
                },
                (results, status) => {
                    console.log(results);
                }
            );
        }
    };

    return (
        <Wrap>
            <Label>
                <Icon src={IconPlace} />
                <Input
                    type="text"
                    onChange={(e) => setSearchMapText(e.target.value)}
                />
                <ButtonSearchMap onClick={searchLocation}>搜尋</ButtonSearchMap>
            </Label>
            <GoogleMap>
                <GoogleMapReact
                    yesIWantToUseGoogleMapApiInternals={true}
                    bootstrapURLKeys={{
                        key: 'AIzaSyDbatx1g_dDPpQIz6mTPgECwjhXgqUjlrU',
                        libraries: ['places'],
                    }}
                    defaultZoom={16}
                    onGoogleApiLoaded={({ map, maps }) =>
                        mapHasLoaded(map, maps)
                    }
                    center={currentCenter}
                    onChange={handleMapCenterChange}
                    onClick={handleClickMap}
                >
                    <Mark lat={centerPoint.lat} lng={centerPoint.lng}>
                        My Marker
                    </Mark>
                </GoogleMapReact>
            </GoogleMap>
        </Wrap>
    );
};

const Wrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
const Label = styled.label`
    width: 768px;
    display: flex;
    margin-bottom: 20px;
`;
const Input = styled(InputClearDefault)`
    margin: 0 30px;
    padding: 15px 0;
    border: 0px solid #dadce0;
    font-size: 25px;
`;
const Icon = styled.img`
    width: 40px;
`;

const GoogleMap = styled.div`
    width: 768px;
    height: 400px;
`;
const Mark = styled.div``;

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

export default Googlemap;
