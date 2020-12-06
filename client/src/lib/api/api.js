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

export const apiPostMovieForm = (data) =>
    userRequest.post('/addactive/free/movie', data);

export const apiPostConcertForm = (data) =>
    userRequest.post('/addactive/free/concert', data);

export const apiPostBasketballForm = (data) =>
    userRequest.post('/addactive/sport/basketball', data);

export const apiPostActiveRunning = (data) =>
    userRequest.post('/addactive/sport/running', data);

export const apiPostActiveFighting = (data) =>
    userRequest.post('/addactive/sport/fighting', data);
