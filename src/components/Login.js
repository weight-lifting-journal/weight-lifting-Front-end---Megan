import React, { Component } from 'react';
import axios from 'axios';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    };

  addUser = e => {
    e.preventDefault();
    
    axios
      .post('https://weightliftingjournallambda.herokuapp.com/users/login', this.state)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('jwt', res.data.token);
 
       
      })
      .catch(err => console.log(err));
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
        <div className="Login-form">
          <h3>Login!</h3>
          <form onSubmit={this.addUser}>
            <input
              onChange={this.handleInputChange}
              placeholder="email"
              value={this.state.email}
              name="email"
            /> <br/>
            <input
              onChange={this.handleInputChange}
              placeholder="password"
              value={this.state.password}
              name="password"
            /> <br/>
            <button type="submit">Login!</button>
          </form>
        </div>
      );
    }
  }

export default Login;