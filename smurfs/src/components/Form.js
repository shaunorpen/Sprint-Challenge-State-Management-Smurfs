import React from 'react';
// import { addSmurf } from '../state/actionCreators';

export default function Form () {
    return (
        <div>
            <h2>Add a Smurf!</h2>
            <form>
                <input type='text' placeholder='Name' />
                <input type='number' placeholder='Height' />
                <input type='number' placeholder='Age' />
                <button>Submit</button>
            </form>
        </div>
    )
}