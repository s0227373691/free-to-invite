import React from 'react';

import BoardGame from '../components/newActive/boardGame';
import Movie from '../components/newActive/movie';
import Mahjong from '../components/newActive/mahjong';
import Basketball from '../components/newActive/basketball';
import Fighting from '../components/newActive/fighting';
import Badminton from '../components/newActive/badminton';
import Running from '../components/newActive/running';

const svgUrl = '/src/assets/svg/';
const activeTypeList = [
    {
        type: '娛樂',
        path: '/entertainment',
        activeList: [
            {
                name: '桌游',
                icon: `${svgUrl}board-games.svg`,
                path: '/entertainment/boardgame',
                formComponent: (activeType) => (
                    <BoardGame activeType={activeType} />
                ),
            },
            {
                name: '電影',
                icon: `${svgUrl}video-player.svg`,
                path: '/entertainment/movie',
                formComponent: (activeType) => (
                    <Movie activeType={activeType} />
                ),
            },
            {
                name: '麻將',

                path: '/entertainment/mahjong',
                formComponent: (activeType) => (
                    <Mahjong activeType={activeType} />
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
            {
                name: '羽球',
                icon: `${svgUrl}shuttlecock.svg`,
                path: '/sport/badminton',
                formComponent: (activeType) => (
                    <Badminton activeType={activeType} />
                ),
            },
        ],
    },
    {
        type: '休閒',
        path: '/travel',
        activeList: [
            {
                name: '休閒1',
            },
            {
                name: '休閒2',
            },
            {
                name: '休閒3',
            },
        ],
    },
];

export default activeTypeList;
