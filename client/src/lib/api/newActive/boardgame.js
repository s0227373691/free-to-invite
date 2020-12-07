import { apiPostNewActiveBoardGame } from '../api';

export const postNewActiveBoardGame = ({
    activeType,
    date,
    population,
    boardGameType,
    title,
    content,
}) => {
    return apiPostNewActiveBoardGame({
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
