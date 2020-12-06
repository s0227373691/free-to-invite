import { apiPostActiveRunning } from '../../api.js';

export const postActiveRunning = ({
    minorType,
    date,
    people,
    precautions,
    runningType,
    title,
    content,
}) => {
    return apiPostActiveRunning({
        minorType,
        date,
        people,
        precautions,
        runningType,
        title,
        content,
    })
        .then((res) => console.log(res))
        .catch((err) => {
            console.error(err.message);
        });
};
