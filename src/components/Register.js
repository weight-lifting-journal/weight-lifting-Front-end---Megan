import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input } from 'reactstrap';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
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
            <Form className='login-form'>
                <div className='subHeader'></div>
                <FormGroup>
                    <Input 
                        type='text'
                        placeholder='User Name'
                        name = 'username'
                        value = {this.state.username}
                        onChange={this.handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                        type='text'
                        placeholder='Email'
                        name = 'email'
                        value = {this.state.email}
                        onChange={this.handleInputChange}
                    />
                </FormGroup>
                <FormGroup>
                    <Input 
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={this.state.password}
                        onChange={this.handleInputChange}
                    />
                    <br />
                    <Button color='dark' size='large' onClick={this.handleLoginSubmit}>
                    Sign Up!
                    </Button>
                </FormGroup>
            </Form>
        );
    }
}

export default Register;