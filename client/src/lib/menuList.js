const menuList = [
    {
        primaryType: '休閒',
        path: '/free',
        content: [
            {
                minorType: '桌游',
                path: '/free/boardgame',
                value: 'type',
            },
            {
                minorType: '電動',
                path: '/free/electricalgame',
                value: 'type',
            },
            {
                minorType: '聽音樂',
                path: '/free/music',
                value: 'type',
            },
        ],
    },
    {
        primaryType: '運動',
        path: '/sport',
        content: [
            {
                minorType: '慢跑',
                path: '/sport/running',
                value: 'type',
            },
            {
                minorType: '籃球',
                path: '/sport/basketball',
                value: 'type',
            },
            {
                minorType: '格鬥',
                path: '/sport/fighting',
                value: 'type',
            },
        ],
    },
    {
        primaryType: '旅遊',
        path: '/travel',
        content: [
            {
                minorType: '台灣',
                path: '/travel/abc',
                value: 'type',
            },
            {
                minorType: '日本',
                path: '/travel/abc',
                value: 'type',
            },
            {
                minorType: '美國',
                path: '/travel/abc',
                value: 'type',
            },
        ],
    },
];

export default menuList;
