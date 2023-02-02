import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navigation from './components/Navigation.js'
import HomePage from './pages/HomePage';
import CreateExercisePage from './pages/CreatePage';
import EditExercisePage from './pages/EditPage';
import { useState } from 'react';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <h1>Exercise Tracker</h1>
            <p>Let's start tracking your exercise!
              Please enter enter the following information:
              <ol> 
                <li>The name of the exercise</li>
                <li>The number of times you have performed the exercise</li>
                <li>The weight of the weights you have used during the exercise</li>
                <li>The day you performed the exercise</li>
              </ol> 
            </p>
        </header>
        <Navigation />
        <main>
          <Route path="/" exact><HomePage setExerciseToEdit={setExerciseToEdit} /></Route>
          <Route path="/add-exercise"><CreateExercisePage /></Route>
          <Route path="/edit-exercise"><EditExercisePage exerciseToEdit={exerciseToEdit} /></Route>
        </main>
        <footer>
          <p>&copy; 2022 Jia May Zheng</p>
        </footer>
      </Router>
    </div>
  );
}

export default App;
