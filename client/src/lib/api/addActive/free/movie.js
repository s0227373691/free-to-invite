import { apiPostMovieForm } from '../../api.js';

export const postMovieForm = ({
    primaryType,
    activeType,
    people,
    precautions,
    movieType,
    title,
    content,
}) => {
    console.log(
        primaryType,
        activeType,
        people,
        precautions,
        movieType,
        title,
        content
    );
    return apiPostMovieForm({
        primaryType,
        activeType,
        people,
        precautions,
        movieType,
        title,
        content,
    })
        .then((res) => console.log(res))
        .catch((err) => {
            console.error(err.message);
        });
};
