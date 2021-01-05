import { apiPostNewActiveMovie } from '../api.js';

export const postNewActiveMovie = ({
    activeType,
    startDate,
    endDate,
    title,
    place,
    population,
    cost,
    content,
    movieName,
    addedMovieTypeList,
}) => {
    return apiPostNewActiveMovie({
        activeType,
        startDate,
        endDate,
        title,
        place,
        population,
        cost,
        content,
        movieName,
        addedMovieTypeList,
    })
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
};
