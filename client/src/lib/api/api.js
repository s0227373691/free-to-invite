const Axios = require('axios');
const baseURL = 'http://localhost:3000/api';

Axios.defaults.withCredentials = true;

// User 相關的 api
const userRequest = Axios.create({
    baseURL: `${baseURL}/users`,
});

export const apiPostUserRegister = (data) =>
    userRequest.post('/register', data);
export const apiGetUserAuth = (data) => userRequest.get('/auth', data);
export const apiPostUserAuth = (data) => userRequest.post('/auth', data);

// New Active 相關的 api
const newActiveRequest = Axios.create({
    baseURL: `${baseURL}/newactive`,
});

export const apiPostNewActiveBoardGame = (data) =>
    newActiveRequest.post('/boardgame', data);

export const apiPostNewActiveMovie = (data) =>
    newActiveRequest.post('/movie', data);
