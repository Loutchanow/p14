// src/redux/reducers/index.js
import { combineReducers } from 'redux';
import userSlice from './userSlice';

const rootReducer = combineReducers({
  users: userSlice,
});

export default rootReducer;
