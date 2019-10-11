import { combineReducers } from 'redux';
import * as reducers from './reducers';

export const rootReducer = combineReducers({
  village: reducers.smurfsReducer,
  errors: reducers.errorReducer,
});