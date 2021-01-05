import { apiPostNewActiveStreetDance } from '../api.js';

export const postNewActiveStreetDance = ({
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
    return apiPostNewActiveStreetDance({
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
