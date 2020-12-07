import { apiPostActiveRunning } from '../../api.js';

export const postActiveRunning = ({
    activeType,
    date,
    people,
    precautions,
    runningType,
    title,
    content,
}) => {
    return apiPostActiveRunning({
        activeType,
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
