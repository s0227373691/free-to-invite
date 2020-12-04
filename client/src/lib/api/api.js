const Axios = require('axios');

Axios.defaults.withCredentials = true;

// User 相關的 api
const userRequest = Axios.create({
    baseURL: 'http://localhost:3000/api/users',
});

// User 相關的 api
export const apiPostUserRegister = (data) =>
    userRequest.post('/register', data);
export const apiGetUserAuth = (data) => userRequest.get('/auth', data);
export const apiPostUserAuth = (data) => userRequest.post('/auth', data);
// 新增文章相關 api
export const apiPostActive_free_boardGame = (data) =>
    userRequest.post('/addactive/free', data);
