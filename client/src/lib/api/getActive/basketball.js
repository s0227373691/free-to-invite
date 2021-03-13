import { apiGetBasketballList } from '../api.js';

export const getBasketballListData = (num) => {
    return apiGetBasketballList(num)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err.message);
        });
};
