import { apiPostNewActiveMovie } from '../api.js';

<<<<<<< HEAD:client/src/lib/api/addActive/free/movie.js
export const postMovieForm = ({
    primaryType,
    minorType,
=======
export const postNewActiveMovie = ({
    date,
>>>>>>> 15ddf1cd4dc7b912279bb5939270b50aad926fc4:client/src/lib/api/newActive/movie.js
    people,
    precautions,
    movieType,
    title,
    content,
}) => {
<<<<<<< HEAD:client/src/lib/api/addActive/free/movie.js
    console.log(
        primaryType,
        minorType,
=======
    return apiPostNewActiveMovie({
        date,
>>>>>>> 15ddf1cd4dc7b912279bb5939270b50aad926fc4:client/src/lib/api/newActive/movie.js
        people,
        precautions,
        movieType,
        title,
        content
    );
    return apiPostMovieForm({
        primaryType,
        minorType,
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
