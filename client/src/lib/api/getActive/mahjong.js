import { apiGetMahjongList } from '../api.js';

export const getMahjongListData = (num) => {
    return apiGetMahjongList(num)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err.message);
        });
};
