import { apiGetDrinkList } from '../api.js';

export const getDrinkListData = (num) => {
    return apiGetDrinkList(num)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err.message);
        });
};
