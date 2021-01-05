import { apiPostNewActiveMahjong } from '../api.js';

export const postNewActiveMahjong = ({
    activeType,
    startDate,
    endDate,
    title,
    population,
    minCost,
    maxCost,
    place,
    content,
    smoking,
    offerFood,
    offerDrink,
    electricTable,
}) => {
    console.log(
        activeType,
        startDate,
        endDate,
        title,
        population,
        minCost,
        maxCost,
        place,
        content,
        smoking,
        offerFood,
        offerDrink,
        electricTable
    );
    return apiPostNewActiveMahjong({
        activeType,
        startDate,
        endDate,
        title,
        population,
        minCost,
        maxCost,
        place,
        content,
        smoking,
        offerFood,
        offerDrink,
        electricTable,
    })
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
};
