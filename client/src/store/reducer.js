import { combineReducers } from 'redux';
import userReducer from './slices';

export default combineReducers({
    user: userReducer,
});
