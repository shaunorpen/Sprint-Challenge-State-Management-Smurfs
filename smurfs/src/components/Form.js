import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addSmurf } from '../state/actionCreators';

export default function Form () {
    const initialFormValues = {
        name: '',
        age: '',
        height: ''
    };
    
    const smurfsApi = 'http://localhost:3333/smurfs';

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
        dispatch(addSmurf(smurfsApi, smurf));
        setSmurf(initialFormValues);
    }

    return (
        <div>
            <h2>Add a Smurf!</h2>
            <form>
                <label htmlFor='name'>Name: </label>
                <input type='text' placeholder='Enter name...' id='name' name='name' value={smurf.name} onChange={handleChange} />
                <label htmlFor='name'>Age: </label>
                <input type='number' placeholder='Enter age...' id='age' name='age' value={smurf.age} onChange={handleChange} />
                <label htmlFor='name'>Height: </label>
                <input type='number' placeholder='Enter height...' id='height' name='height' value={smurf.height} onChange={handleChange} />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}