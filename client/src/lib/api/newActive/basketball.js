import { apiPostNewActiveBasketball } from '../api.js';

export const postNewActiveBasketball = ({
    activeType,
    difficulty,
    date,
    people,
    precautions,
    basketballType,
    title,
    content,
}) => {
    return apiPostNewActiveBasketball({
        activeType,
        difficulty,
        date,
        people,
        precautions,
        basketballType,
        title,
        content,
    })
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
};
