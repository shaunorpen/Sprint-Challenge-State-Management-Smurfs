import React from 'react';

export default function Smurf (props) {
    return (
        <div>
            <div>Name: {props.smurf.name}</div>
            <div>Age: {props.smurf.age}</div>
            <div>Height: {props.smurf.height}</div>
        </div>
    )
}