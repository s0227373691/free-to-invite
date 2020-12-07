import { apiPostNewActiveRunning } from '../api.js';

export const postNewActiveRunning = ({
    activeType,
    date,
    people,
    precautions,
    runningType,
    title,
    content,
}) => {
    return apiPostNewActiveRunning({
        activeType,
        date,
        people,
        precautions,
        runningType,
        title,
        content,
    })
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
};
