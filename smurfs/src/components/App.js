import React from "react";
import { useSelector } from 'react-redux';

import Smurfs from './Smurfs';

export default function App () {
  const smurfs = useSelector(state => state.village);
  return (
    <div className="App">
      <h1>SMURFS! 2.0 W/ Redux</h1>
      <Smurfs smurfs={smurfs} />
    </div>
  );
}
