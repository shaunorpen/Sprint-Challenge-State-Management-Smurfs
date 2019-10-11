import { combineReducers } from 'redux';
import * as reducers from './reducers';

export const rootReducer = combineReducers({
  smurfs: reducers.smurfsReducer,
  errors: reducers.errorReducer,
});