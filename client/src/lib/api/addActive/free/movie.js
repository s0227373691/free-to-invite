import { apiPostMovieForm } from '../../api.js';

export const postMovieForm = ({
    date,
    people,
    precautions,
    boardgameType,
    title,
    content,
}) => {
    console.log(date, people, precautions, boardgameType, title, content);
    return apiPostActiveFreeBoardGame({
        date,
        people,
        precautions,
        boardgameType,
        title,
        content,
    })
        .then((res) => console.log(res))
        .catch((err) => {
            console.error(err.message);
        });
};
