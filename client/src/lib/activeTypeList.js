import React from 'react';

import BoardGame from '../components/newActive/boardGame';
import Movie from '../components/newActive/movie';
import Concert from '../components/newActive/concert';
import Basketball from '../components/newActive/basketball';
import Fighting from '../components/newActive/fighting';
import Running from '../components/newActive/running';
import Newtaipei from '../components/newActive/newtaipei';
import Taichung from '../components/newActive/taichung';
import Taipei from '../components/newActive/taipei';

const svgUrl = '/src/assets/svg/';
const activeTypeList = [
    {
        type: '休閒',
        path: '/free',
        activeList: [
            {
                name: '桌游',
                icon: `${svgUrl}board-games.svg`,
                path: '/free/boardgame',
                formComponent: (activeType) => (
                    <BoardGame activeType={activeType} />
                ),
            },
            {
                name: '電影',
                icon: `${svgUrl}video-player.svg`,
                path: '/free/movie',
                formComponent: (activeType) => (
                    <Movie activeType={activeType} />
                ),
            },
            {
                name: '演唱會',
                icon: `${svgUrl}music.svg`,
                path: '/free/concert',
                formComponent: (activeType) => (
                    <Concert activeType={activeType} />
                ),
            },
        ],
    },
    {
        type: '運動',
        path: '/sport',
        activeList: [
            {
                name: '慢跑',
                icon: `${svgUrl}running.svg`,
                path: '/sport/running',
                formComponent: (activeType) => (
                    <Running activeType={activeType} />
                ),
            },
            {
                name: '籃球',
                icon: `${svgUrl}basketball-ball.svg`,
                path: '/sport/basketball',
                formComponent: (activeType) => (
                    <Basketball activeType={activeType} />
                ),
            },
            {
                name: '格鬥',
                icon: `${svgUrl}boxing-glove.svg`,
                path: '/sport/fighting',
                formComponent: (activeType) => (
                    <Fighting activeType={activeType} />
                ),
            },
        ],
    },
    {
        type: '旅遊',
        path: '/travel',
        activeList: [
            {
                name: '台北',
                icon: `${svgUrl}basketball-ball.svg`,
                path: '/travel/taipei',
                formComponent: (activeType) => (
                    <Newtaipei activeType={activeType} />
                ),
            },
            {
                name: '台中',
                icon: `${svgUrl}basketball-ball.svg`,
                path: '/travel/taichung',
                formComponent: (activeType) => (
                    <Taichung activeType={activeType} />
                ),
            },
            {
                name: '新北',
                icon: `${svgUrl}basketball-ball.svg`,
                path: '/travel/newtaipei',
                formComponent: (activeType) => (
                    <Taipei activeType={activeType} />
                ),
            },
        ],
    },
];

export default activeTypeList;
