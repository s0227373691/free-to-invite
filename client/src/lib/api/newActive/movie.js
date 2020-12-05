import { apiPostNewActiveMovie } from '../api.js';

export const postNewActiveMovie = ({
    date,
    people,
    precautions,
    boardgameType,
    title,
    content,
}) => {
    return apiPostNewActiveMovie({
        date,
        people,
        precautions,
        boardgameType,
        title,
        content,
    })
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
};
