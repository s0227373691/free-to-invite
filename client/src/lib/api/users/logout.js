import { apiGetUserLogout } from '../api';

export const getUserLogout = () => {
    return apiGetUserLogout()
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
};
