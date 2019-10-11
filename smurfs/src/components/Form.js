import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSmurf } from '../state/actionCreators';

export default function Form () {
    const [smurf, setSmurf] = useState({
        name: '',
        age: 0,
        height: 0,
    });

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setSmurf({
            ...smurf,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        debugger
        event.preventDefault();
        dispatch(addSmurf(smurf));
    }

    return (
        <div>
            <h2>Add a Smurf!</h2>
            <form>
                <input type='text' placeholder='Name' name='name' value={smurf.name} onChange={handleChange} />
                <input type='number' placeholder='Age' name='age' value={smurf.age} onChange={handleChange} />
                <input type='number' placeholder='Height' name='height' value={smurf.height} onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}