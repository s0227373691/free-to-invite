import { apiGetUserAuth, apiPostUserAuth } from './api';

export const getUserAuth = () => {
    return apiGetUserAuth()
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
};

export const postUserAuth = ({ email, password }) => {
    return apiPostUserAuth({
        email,
        password,
    })
        .then((res) => res)
        .catch((err) => {
            alert('登入失敗');
            console.error(err.message);
        });
};
