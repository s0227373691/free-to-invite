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
const createActiveRequest = Axios.create({
    baseURL: `${baseURL}/active/create`,
});
export const apiPostCreateActiveBadminton = (data) =>
    createActiveRequest.post('/badminton', data);

// API: new active
const newActiveRequest = Axios.create({
    baseURL: `${baseURL}/newactive`,
});
export const apiPostNewActiveBoardGame = (data) =>
    newActiveRequest.post('/boardgame', data);

export const apiPostNewActiveMovie = (data) =>
    newActiveRequest.post('/movie', data);

export const apiPostNewActiveFighting = (data) =>
    newActiveRequest.post('/fighting', data);

export const apiPostNewActiveBasketball = (data) =>
    newActiveRequest.post('/basketball', data);

export const apiPostNewActiveRunning = (data) =>
    newActiveRequest.post('/running', data);

export const apiPostNewActiveBadminton = (data) =>
    newActiveRequest.post('/badminton', data);

export const apiPostNewActiveMahjong = (data) =>
    newActiveRequest.post('/mahjong', data);

export const apiPostNewActiveDrink = (data) =>
    newActiveRequest.post('/drink', data);

export const apiPostNewActiveStreetDance = (data) =>
    newActiveRequest.post('/streetdance', data);

// API: get activeList
const getActiveListRequest = Axios.create({
    baseURL: `${baseURL}/list`,
});
export const apiGetBoardGameList = (num) =>
    getActiveListRequest.get(`/boardgame/${num}`);
export const apiGetMovieList = (num) =>
    getActiveListRequest.get(`/movie/${num}`);
export const apiGetMahjongList = (num) =>
    getActiveListRequest.get(`/mahjong/${num}`);
export const apiGetStreetDanceList = (num) =>
    getActiveListRequest.get(`/streetdance/${num}`);
export const apiGetRunningList = (num) =>
    getActiveListRequest.get(`/running/${num}`);
export const apiGetBasketballList = (num) =>
    getActiveListRequest.get(`/basketballList/${num}`);
export const apiGetBadmintonList = (num) =>
    getActiveListRequest.get(`/badminton/${num}`);
export const apiGetDrinkList = (num) =>
    getActiveListRequest.get(`/drink/${num}`);
