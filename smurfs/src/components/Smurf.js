import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteSmurf } from '../state/actionCreators';

const smurfsApi = 'http://localhost:3333/smurfs/';


export default function Smurf (props) {
    const dispatch = useDispatch();
    
    const handleClick = (event) => {
        event.preventDefault();
        dispatch(deleteSmurf(smurfsApi, props.smurf.id));
    }

    return (
        <div>
            <div>Name: {props.smurf.name}</div>
            <div>Age: {props.smurf.age}</div>
            <div>Height: {props.smurf.height}</div>
            <button onClick={handleClick}>Delete</button>
        </div>
    )
}