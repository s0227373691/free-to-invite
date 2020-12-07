import { apiPostNewActiveFighting } from '../api.js';

export const postNewActiveFighting = ({
    activeType,
    date,
    population,
    boardGameType,
    title,
    content,
}) => {
    return apiPostNewActiveFighting({
        activeType,
        date,
        population,
        boardGameType,
        title,
        content,
    })
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
};
