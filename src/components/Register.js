import React, { Component } from 'react';
import axios from 'axios';



class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: ''
        }
    };

  addUser = e => {
    e.preventDefault();
    
    
    axios
      .post('https://weightliftingjournallambda.herokuapp.com/users/register', this.state)
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
      <div className="Register-form">
        <h3>Sign Up!</h3>
        <form onSubmit={this.addUser}>
          <input
            onChange={this.handleInputChange}
            placeholder="username"
            value={this.state.username}
            name="username"
          /> <br/>
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
          <button type="submit">Sign Up!</button>
        </form>
      </div>
    );
  }
}

export default Register;