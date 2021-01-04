const Axios = require('axios');
const baseURL = 'http://localhost:3000/api';

Axios.defaults.withCredentials = true;

// API: user
const userRequest = Axios.create({
    baseURL: `${baseURL}/users`,
});
export const apiPostUserRegister = (data) =>
    userRequest.post('/register', data);
export const apiGetUserAuth = (data) => userRequest.get('/auth', data);
export const apiPostUserAuth = (data) => userRequest.post('/auth', data);
export const apiGetUserLogout = (data) => userRequest.get('/logout', data);

// API: new active
const newActiveRequest = Axios.create({
    baseURL: `${baseURL}/newactive`,
});
export const apiPostNewActiveBoardGame = (data) =>
    newActiveRequest.post('/boardgame', data);

export const apiPostNewActiveMovie = (data) =>
    newActiveRequest.post('/movie', data);

export const apiPostNewActiveConcert = (data) =>
    newActiveRequest.post('/concert', data);

export const apiPostNewActiveBasketball = (data) =>
    newActiveRequest.post('/basketball', data);

export const apiPostNewActiveRunning = (data) =>
    newActiveRequest.post('/running', data);

export const apiPostNewActiveFighting = (data) =>
    newActiveRequest.post('/fighting', data);

export const apiPostNewActiveBadminton = (data) =>
    newActiveRequest.post('/badminton', data);
