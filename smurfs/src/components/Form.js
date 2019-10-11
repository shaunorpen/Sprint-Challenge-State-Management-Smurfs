import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uuid from 'uuid';
import { addSmurf } from '../state/actionCreators';

export default function Form () {
    const initialFormValues = {
        name: '',
        age: 0,
        height: 0,
        id: uuid()
    };
    
    const [smurf, setSmurf] = useState(initialFormValues);

    const dispatch = useDispatch();

    const handleChange = (event) => {
        setSmurf({
            ...smurf,
            [event.target.name]: event.target.value,
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addSmurf(smurf));
        setSmurf(initialFormValues);
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