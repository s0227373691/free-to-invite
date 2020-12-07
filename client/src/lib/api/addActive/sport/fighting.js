import { apiPostActiveFighting } from '../../api.js';

export const postActiveFighting = ({
    activeType,
    date,
    population,
    boardGameType,
    title,
    content,
}) => {
    return apiPostActiveFighting({
        activeType,
        date,
        population,
        boardGameType,
        title,
        content,
    })
        .then((res) => console.log(res))
        .catch((err) => {
            console.error(err.message);
        });
};
