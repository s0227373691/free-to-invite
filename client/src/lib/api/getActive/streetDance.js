import { apiGetStreetDanceList } from '../api.js';

export const getStreetDanceListData = (num) => {
    return apiGetStreetDanceList(num)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err.message);
        });
};
