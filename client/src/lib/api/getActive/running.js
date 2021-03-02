import { apiGetRunningList } from '../api.js';

export const getRunningListData = (num) => {
    return apiGetRunningList(num)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err.message);
        });
};
