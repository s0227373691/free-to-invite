import { apiPostNewActiveBoardGame } from '../api.js';

export const postNewActiveBoardGame = ({
    userName,
    activeType,
    startDate,
    endDate,
    title,
    population,
    cost,
    content,
    addedBoardGameList,
    place,
}) => {
    return apiPostNewActiveBoardGame({
        userName,
        activeType,
        startDate,
        endDate,
        title,
        population,
        cost,
        content,
        addedBoardGameList,
        place,
    })
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
};
