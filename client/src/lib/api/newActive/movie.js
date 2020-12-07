import { apiPostNewActiveMovie } from '../api.js';

export const postNewActiveMovie = ({
    primaryType,
    activeType,
    people,
    precautions,
    movieType,
    title,
    content,
}) => {
    return apiPostNewActiveMovie({
        primaryType,
        activeType,
        people,
        precautions,
        movieType,
        title,
        content,
    })
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
};
