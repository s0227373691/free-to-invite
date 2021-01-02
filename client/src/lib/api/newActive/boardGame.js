import { apiPostNewActiveBoardGame } from '../api.js';

export const postNewActiveBoardGame = ({
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
