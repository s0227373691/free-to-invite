import { apiPostNewActiveConcert } from '../api.js';

export const postNewActiveConcert = ({
    activeType,
    date,
    people,
    precautions,
    musicType,
    title,
    content,
}) => {
    return apiPostNewActiveConcert({
        activeType,
        date,
        people,
        precautions,
        musicType,
        title,
        content,
    })
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
};
