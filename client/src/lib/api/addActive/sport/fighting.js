import { apiPostActiveFighting } from '../../api.js';

export const postActiveFighting = ({
    activeType,
    date,
    people,
    precautions,
    fighting,
    title,
    content,
}) => {
    return apiPostActiveFighting({
        activeType,
        date,
        people,
        precautions,
        fighting,
        title,
        content,
    })
        .then((res) => console.log(res))
        .catch((err) => {
            console.error(err.message);
        });
};
