import { apiPostConcertForm } from '../../api.js';

export const postConcertForm = ({
    activeType,
    date,
    people,
    precautions,
    musicType,
    title,
    content,
}) => {
    console.log(date, people, precautions, musicType, title, content);
    return apiPostConcertForm({
        activeType,
        date,
        people,
        precautions,
        musicType,
        title,
        content,
    })
        .then((res) => console.log(res))
        .catch((err) => {
            console.error(err.message);
        });
};
