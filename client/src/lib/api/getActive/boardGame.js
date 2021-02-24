import { apiGetBoardGameList } from '../api.js';

export const getBoardGameListData = (num) => {
    return apiGetBoardGameList(num)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err.message);
        });
};
