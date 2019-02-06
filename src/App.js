import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import Register from './components/Register';
import Home from './components/Home';
import Navigation from './components/Navigation';
import WorkoutListPg from './components/Workouts/WorkoutListPg';

class App extends Component {



  render() {
    return (
      <div className="App">
        <Navigation />
        <Route exact path='/' component={Home}>Home</Route>
        <Route path='/users/login' component={Login}>Login</Route>
        <Route path='/users/register' component={Register}>Register</Route>
        <Route path='/workouts' component={WorkoutListPg}>Workouts</Route>
      </div>
    );
  }
}

export default App;
