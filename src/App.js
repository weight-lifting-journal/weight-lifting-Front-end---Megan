import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Login from './components/Login';
import './App.css';
import Register from './components/Register';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Route path='/users/login' component={Login}>Login</Route> */}
        <Route path='/users/register' component={Register}>Register</Route>
      </div>
    );
  }
}

export default App;
