import { apiGetBadmintonList } from '../api.js';

export const getBadmintonListData = (num) => {
    return apiGetBadmintonList(num)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err.message);
        });
};
