import { apiPostNewActiveBadminton } from '../api.js';

export const postNewActiveBadminton = (formValue) => {
    return apiPostNewActiveBadminton(formValue)
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
};
