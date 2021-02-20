import { apiGetBoardGameList } from '../api.js';

export const getBoardGameListData = () => {
    return apiGetBoardGameList()
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err.message);
        });
};
