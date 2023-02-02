import React from 'react';
import Exercises from './Row';

function Table({ exercises, onDelete, onEdit }) {
    return (
        <table class = "center" id="exercise_list">
            <thead>
                <tr>
                    <th>Name of Exercise</th>
                    <th>Number of Reps</th>
                    <th>Weights</th>
                    <th>Unit of Weights</th>
                    <th>Date</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <Exercises exercise={exercise}
                    onEdit={onEdit}
                    onDelete={onDelete}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default Table;