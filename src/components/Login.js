import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
    };

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLoginSubmit = e => {
        const user = this.state.username;
        localStorage.setItem('user', user);
        window.location.reload();
    }

    render() {
        return (
            <h1>Login page</h1>
            // <Form className='login-form'>
            //     <div className='subHeader'>Login...</div>
            //     <FormGroup>
            //         <Input 
            //             type='text'
            //             placeholder='User Name'
            //             name = 'username'
            //             value = {this.state.username}
            //             onChange={this.handleInputChange}
            //         />
            //     </FormGroup>
            //     <FormGroup>
            //         <Input 
            //             type='password'
            //             placeholder='Password'
            //             name='password'
            //             value={this.state.password}
            //             onChange={this.handleInputChange}
            //         />
            //         <br />
            //         <Button color='dark' size='large' onClick={this.handleLoginSubmit}>
            //         Log In
            //         </Button>
            //         {/* <Link to='/users/register'>Register</Link> */}
            //     </FormGroup>
            // </Form>
        );
    }
}

export default Login;