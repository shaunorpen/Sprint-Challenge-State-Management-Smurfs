import React from 'react';
import Smurf from './Smurf';

export default function Smurfs(props) {
    return (
        <div className='Smurfs'>
            {props.smurfs.map(smurf => <Smurf smurf={smurf} key={smurf.id} />)}
        </div>
    );
}