import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';

import Smurfs from './Smurfs';
import Form from './Form';

import { getSmurfsFromApi } from '../state/actionCreators';

export default function App (props) {
  const smurfs = useSelector(state => state.smurfs);
  const dispatch = useDispatch();
  const smurfsApi = 'http://localhost:3333/smurfs';

  useEffect(() => {
    dispatch(getSmurfsFromApi(smurfsApi));
  }, [dispatch, smurfsApi]);

  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <Smurfs smurfs={smurfs} />
      <Form />
    </div>
  );
}
