import axios from 'axios';
import * as types from './actionTypes';

export function addError(error) {
  return {
    type: types.ADD_ERROR,
    payload: error,
  };
}

export function addSmurfs(smurfs) {
  return {
    type: types.ADD_SMURFS,
    payload: smurfs,
  };
}

export function deleteSmurf(id) {
  return {
      type: types.DELETE_SMURF,
      payload: id,
  };
}

export const getSmurfs = (url) => dispatch => {
  axios.get(url)
    .then(res => {
      const smurfs = res.data;
      dispatch(addSmurfs(smurfs));
    })
    .catch(err => {
      dispatch(addError(err.message));
    });
};