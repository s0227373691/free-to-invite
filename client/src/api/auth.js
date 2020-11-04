import { apiGetUserAuth, apiPostUserAuth } from './api';

export const getUserAuth = async () => {
    const { data } = await apiGetUserAuth()
        .then((res) => res)
        .catch((err) => {
            console.error(err.message);
        });
    return data;
};

export const postUserAuth = async ({ email, password }) => {
    const { data } = await apiPostUserAuth({
        email,
        password,
    })
        .then((res) => res)
        .catch((err) => {
            alert('登入失敗');
            console.error(err.message);
        });
    return data;
};
