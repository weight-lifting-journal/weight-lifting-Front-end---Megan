import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';



class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    };



  // addUser = e => {
  //   console.log(addUser);
  //   e.preventDefault();
    
    

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    axios
      .post('https://weightliftingjournallambda.herokuapp.com/users/login', this.state)
      .then(res => {
        console.log(res.data);
        localStorage.setItem('jwt', res.data.token);

  
        
 
       
      })
      .catch(err => console.log(err));
    }
  

  render() {
    return (
        <div className="Login-form">
          <h3>Login!</h3>
          <form onSubmit={this.handleSubmit}>
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
            <button onClick={this.handleSubmit}>Login!</button>
            <Link to='/users/register'>Register</Link>
          </form>
        </div>
      );
    }
  }

export default Login;