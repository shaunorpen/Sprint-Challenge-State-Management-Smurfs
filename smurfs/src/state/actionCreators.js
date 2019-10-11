import axios from 'axios';
import * as types from './actionTypes';

export function addError(error) {
  return {
    type: types.ADD_ERROR,
    payload: error,
  };
}

export function getSmurfs(smurfs) {
  return {
    type: types.GET_SMURFS,
    payload: smurfs,
  };
}

export function addSmurf(smurf) {
  return {
    type: types.ADD_SMURF,
    payload: smurf,
  };
}

export function deleteSmurf(id) {
  return {
      type: types.DELETE_SMURF,
      payload: id,
  };
}

export const getSmurfsFromApi = (url) => dispatch => {
  axios.get(url)
    .then(res => {
      const smurfs = res.data;
      dispatch(getSmurfs(smurfs));
    })
    .catch(err => {
      dispatch(addError(err.message));
    });
};