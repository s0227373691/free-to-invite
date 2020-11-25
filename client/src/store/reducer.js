import { combineReducers } from 'redux';
import usersReducer from './slices/users';

export default combineReducers({
    users: usersReducer,
});
