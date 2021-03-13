import { apiGetMovieList } from '../api.js';

export const getMovieListData = (num) => {
    return apiGetMovieList(num)
        .then((res) => {
            return res.data;
        })
        .catch((err) => {
            console.error(err.message);
        });
};
