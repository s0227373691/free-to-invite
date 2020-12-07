import { apiPostNewActiveBoardGame } from '../api.js';

export const postNewActiveBoardGame = ({
    activeType,
    date,
    people,
    precautions,
    boardgameType,
    title,
    content,
}) => {
    return apiPostNewActiveBoardGame({
        activeType,
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
