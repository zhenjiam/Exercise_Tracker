import React from 'react';
import {FaTrash, FaEdit} from 'react-icons/fa';

function Exercises({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><FaEdit onClick={() => onEdit(exercise)}/></td>
            <td><FaTrash onClick={() => onDelete(exercise._id)}/></td>
        </tr>
    );
}

export default Exercises;