import * as types from './actionTypes';

const initialSmurfs= [];
export function smurfsReducer(state = initialSmurfs, action) {
  switch (action.type) {
    case types.GET_SMURFS:
      return [...action.payload];
    default:
      return state;
  }
}

const initialErrors = [];
export function errorReducer(state = initialErrors, action) {
  switch (action.type) {
    case (types.ADD_ERROR):
      return [...state, action.payload];
    default:
      return state;
  }
}
