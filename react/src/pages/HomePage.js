import React from 'react';
// import { Link } from 'react-router-dom';
import Table from '../components/Table';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({setExerciseToEdit}) {
    const [exercises, setExercises] = useState([]); 
    const history = useHistory();

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'});
        if (response.status === 204) {
            const getResponse = await fetch('/exercises');
	        const data = await getResponse.json();
	        setExercises(data);
        }else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`);
        }
    };

    const onEdit = exercise => {
        setExerciseToEdit(exercise)
        history.push("/edit-exercise");
    };

    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json()
        setExercises(data)
    };

    useEffect(()=> {
        loadExercises();
    }, []);

    return (
        <>
            <h2>Exercise List</h2>
            <Table exercises={exercises} onEdit={onEdit} onDelete={onDelete}></Table>
        </>
    );
}

export default HomePage;