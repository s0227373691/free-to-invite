import { apiPostActiveFighting } from '../../api.js';

export const postActiveFighting = ({
    minorType,
    date,
    people,
    precautions,
    fighting,
    title,
    content,
}) => {
    return apiPostActiveFighting({
        minorType,
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
