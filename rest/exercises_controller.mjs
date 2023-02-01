import * as exercises from './exercises_model.mjs';
import express from 'express';

const PORT = 3000;

const app = express();

app.use(express.json());

/**
 * Create a new exercise with name, reps, weight, unit & date
 */
app.post('/exercises', (req, res) => {
    exercises.createExercises(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercises => {
            res.status(201).json(exercises);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Internal Server Error' });
        });
});


/**
 * Retrieve the entire collections of exercises
 */
app.get('/exercises', (req, res) => {
    exercises.findExercises()
        .then(exercises => {
            res.status(200).json(exercises);
        })
        .catch(error => {
            console.error(error);
            res.status(500).json({ Error: 'Internal Server Error' });
        });
});

/**
 * Update the exercise whose id is provided in the path parameter and set
 * its name, reps, weight, unit & date to the values provided in the body.
 */
 app.put('/exercises/:id', (req, res) => {
    exercises.updateExercises(req.params.id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
    .then(numUpdated => {
        if (numUpdated === 1) {
            res.status(200).json({ _id: req.params.id, name: req.body.name, reps: req.body.reps, weight: req.body.weight,
            unit: req.body.unit, date: req.body.date })
        } else {
            res.status(500).json({ Error: 'Internal Server Error' });
        }
    })
    .catch(error => {
        console.error(error);
        res.status(404).json({ Error: 'The Requested Document Is Not Found.' });
    });
});


/**
 * Delete the exercise whose id is provided in the query parameters
 */
app.delete('/exercises/:id', (req, res) => {
    exercises.deleteExercises(req.params.id)
    .then(deletedCount => {
        if (deletedCount === 1) {
            res.status(204).send();
        } else {
            res.status(500).json({ Error: 'Internal Server Error' });
        }
    })
    .catch(error => {
        console.error(error);
        res.status(404).json({ Error: 'The Requested Document Is Not Found.' });
    });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});