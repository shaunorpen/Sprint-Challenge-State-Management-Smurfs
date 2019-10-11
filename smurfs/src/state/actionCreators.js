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

export const getSmurfsFromApi = (url) => dispatch => {
  axios.get(url)
    .then(res => {
      const smurfs = [...res.data];
      dispatch(getSmurfs(smurfs));
    })
    .catch(err => {
      dispatch(addError(err.message));
    });
};

export const addSmurf = (url, smurf) => dispatch => {
  debugger
  axios.post(url, smurf)
    .then(res => {
      const smurfs = [...res.data];
      dispatch(getSmurfs(smurfs));
    })
    .catch(err => {
      dispatch(addError(err.message));
    });
};

export const deleteSmurf = (url, id) => dispatch => {
  debugger
  axios.delete(url + id.toString())
    .then(res => {
      debugger
      const smurfs = [...res.data];
      dispatch(getSmurfs(smurfs));
    })
    .catch(err => {
      debugger
      dispatch(addError(err.message));
    });
};