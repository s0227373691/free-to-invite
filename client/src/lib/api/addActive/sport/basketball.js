import { apiPostBasketballForm } from '../../api.js';

export const postBasketballForm = ({
    activeType,
    difficulty,
    date,
    people,
    precautions,
    basketballType,
    title,
    content,
}) => {
    return apiPostBasketballForm({
        activeType,
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
