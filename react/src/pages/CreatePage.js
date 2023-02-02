import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const CreateExercisePage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if (response.status === 201){
            alert("Successfully added the exercise!")
        } else {
            alert("Failed to add the exercise");
        }
        history.push("/");
    };

    return (
        <div>
            <h2>Add An Exercise</h2>
            <p>
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                placeholder="Reps"
                value={reps}
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select 
                name = 'units' 
                id='unit-selector'
                value={unit} 
                onChange={e => setUnit(e.target.value)}>
                    <option value=''></option>
                    <option value='lbs'>lbs</option>
                    <option value='kg'>kg</option>
            </select>
            <input
                type="text"
                value={date}
                placeholder="MM-DD-YY"
                onChange={e => setDate(e.target.value)} 
                required />
            <button onClick={addExercise}>Add</button>
        </p>
        </div>
    );
}

export default CreateExercisePage;