const activeList = [
    {
        primaryType: '休閒',
        path: '/free',
        subActiveList: [
            {
                minorType: '桌游',
                path: '/free/boardgame',
            },
            {
                minorType: '電影',
                path: '/free/movie',
            },
            {
                minorType: '演唱會',
                path: '/free/concert',
            },
        ],
    },
    {
        primaryType: '運動',
        path: '/sport',
        subActiveList: [
            {
                minorType: '慢跑',
                path: '/sport/running',
            },
            {
                minorType: '籃球',
                path: '/sport/basketball',
            },
            {
                minorType: '格鬥',
                path: '/sport/fighting',
            },
        ],
    },
    {
        primaryType: '旅遊',
        path: '/travel',
        subActiveList: [
            {
                minorType: '台北',
                path: '/travel/taipei',
            },
            {
                minorType: '台中',
                path: '/travel/taichung',
            },
            {
                minorType: '新北',
                path: '/travel/newtaipei',
            },
        ],
    },
];

export default activeList;
