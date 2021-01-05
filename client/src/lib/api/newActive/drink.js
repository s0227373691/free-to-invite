import { apiPostNewActiveDrink } from '../api.js';

export const postNewActiveDrink = ({
    activeType,
    startDate,
    endDate,
    title,
    population,
    cost,
    place,
    content,
    liqueurPrice,
    age,
    acceptSex,
}) => {
    return apiPostNewActiveDrink({
        activeType,
        startDate,
        endDate,
        title,
        population,
        cost,
        place,
        content,
        liqueurPrice,
        age,
        acceptSex,
    })
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
};
