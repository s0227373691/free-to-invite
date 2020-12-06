import { apiPostBasketballForm } from '../../api.js';

export const postBasketballForm = ({
    minorType,
    difficulty,
    date,
    people,
    precautions,
    basketballType,
    title,
    content,
}) => {
    return apiPostBasketballForm({
        minorType,
        difficulty,
        date,
        people,
        precautions,
        basketballType,
        title,
        content,
    })
        .then((res) => console.log(res))
        .catch((err) => {
            console.error(err.message);
        });
};
