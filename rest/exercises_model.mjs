// Get the mongoose object
import mongoose from 'mongoose';

// Prepare to the database for exercises in the MongoDB server running locally on port 27017
mongoose.connect(
    "mongodb://localhost:27017/exercises_db",
    { useNewUrlParser: true, useUnifiedTopology: true }
);

// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: String, required: true }
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Exercises = mongoose.model("Exercises", exerciseSchema);

/**
 * Create an Exercise
 * Parameters: name, reps, weight, unit, date
 */
 const createExercises = async (name, reps, weight, unit, date) => {
    const exercises = new Exercises({ name: name, reps: reps, weight: weight, unit: unit, date: date });
    // Call save to persist this object as a document in MongoDB
    return exercises.save();
 };

/**
 * Retrieve Exercise
 * Parameters: None (Empty Array)
 */
 const findExercises = async () => {
    const query = Exercises.find({})
    return query.exec();
}


/**
 * Update Exercise
 * Parameters: find by {_id} and change values of {name, reps, weight, unit, date}
 */
 const updateExercises = async (_id, name, reps, weight, unit, date) => {
    const result = await Exercises.replaceOne({ _id: _id },
        { name: name, reps: reps, weight: weight, unit: unit, date: date });
    return result.modifiedCount;
}


/**
 * Delete Exercise
 * Parameters: _id
 */
const deleteExercises = async (_id) => {
    const result = await Exercises.deleteOne({ _id: _id });
    return result.deletedCount;
}

export { createExercises, findExercises, updateExercises, deleteExercises };