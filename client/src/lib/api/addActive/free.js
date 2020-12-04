import { apiPostActive_free_boardGame } from '../api';

export const postActive_free_boardGame = () => {
    return apiPostActive_free_boardGame()
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
};
