const activeList = [
    {
        primaryType: '休閒',
        path: '/free',
        subActiveList: [
            {
                activeType: '桌游',
                path: '/free/boardgame',
            },
            {
                activeType: '電影',
                path: '/free/movie',
            },
            {
                activeType: '演唱會',
                path: '/free/concert',
            },
        ],
    },
    {
        primaryType: '運動',
        path: '/sport',
        subActiveList: [
            {
                activeType: '慢跑',
                path: '/sport/running',
            },
            {
                activeType: '籃球',
                path: '/sport/basketball',
            },
            {
                activeType: '格鬥',
                path: '/sport/fighting',
            },
        ],
    },
    {
        primaryType: '旅遊',
        path: '/travel',
        subActiveList: [
            {
                activeType: '台北',
                path: '/travel/taipei',
            },
            {
                activeType: '台中',
                path: '/travel/taichung',
            },
            {
                activeType: '新北',
                path: '/travel/newtaipei',
            },
        ],
    },
];

export default activeList;
