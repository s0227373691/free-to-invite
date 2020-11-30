const menuList = [
    {
        primaryType: '休閒',
        path: '/free',
        content: [
            {
                minorType: '桌游',
                path: '/free/boardgame',
                value: [
                    {
                        boardGameType: [
                            '策略遊戲',
                            '益智遊戲',
                            '推理遊戲',
                            '角色扮演遊戲',
                            '幼教遊戲',
                            '小品遊戲',
                            '合作遊戲',
                            '陣營遊戲',
                        ],
                    },
                    {
                        boardGameType2: [
                            '策略遊戲2',
                            '益智遊戲2',
                            '推理遊戲2',
                            '角色扮演遊戲2',
                            '幼教遊戲2',
                            '小品遊戲2',
                            '合作遊戲2',
                            '陣營遊戲2',
                        ],
                    },
                ],
            },
            {
                minorType: '線上遊戲',
                path: '/free/electricalgame',
                value: [{ onlineGameType: ['射擊類', '鬥塔遊戲', '策略遊戲'] }],
            },
            {
                minorType: '電影',
                path: '/free/movie',
                value: [
                    {
                        movieType: [
                            '動作類型',
                            '愛情類型',
                            '戲劇類型',
                            '卡通類型',
                        ],
                    },
                ],
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
                value: [
                    {
                        difficulty: ['專業', '高級', '新手'],
                    },
                ],
            },
            {
                minorType: '籃球',
                path: '/sport/basketball',
                value: [
                    {
                        difficulty: ['專業', '高級', '新手'],
                    },
                ],
            },
            {
                minorType: '格鬥',
                path: '/sport/fighting',
                value: [
                    {
                        difficulty: ['專業', '高級', '新手'],
                    },
                ],
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
                value: [
                    {
                        difficulty: ['專業', '高級', '新手'],
                    },
                ],
            },
            {
                minorType: '日本',
                path: '/travel/abc',
                value: [
                    {
                        difficulty: ['專業', '高級', '新手'],
                    },
                ],
            },
            {
                minorType: '美國',
                path: '/travel/abc',
                value: [
                    {
                        difficulty: ['專業', '高級', '新手'],
                    },
                ],
            },
        ],
    },
];

export default menuList;
