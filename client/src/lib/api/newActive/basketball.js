import { apiPostNewActiveBasketball } from '../api.js';

export const postNewActiveBasketball = ({
    activeType,
    startDate,
    endDate,
    title,
    population,
    content,
    place,
    individualCost,
    teamCost,
    roundNumber,
    ballfriendLevel,
    rule,
}) => {
    return apiPostNewActiveBasketball({
        activeType,
        startDate,
        endDate,
        title,
        population,
        content,
        place,
        individualCost,
        teamCost,
        roundNumber,
        ballfriendLevel,
        rule,
    })
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
};
