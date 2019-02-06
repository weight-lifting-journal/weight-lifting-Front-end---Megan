import React, { Component } from "react";
import { NavLink } from 'react-router-dom';
import './Navigation.css';

class Navigation extends React.Component {
    state = { show: false }
  
    showModal = () => {
      this.setState({ show: true });
    }
    
    hideModal = () => {
      this.setState({ show: false });
    }
      
    render() {
      return (
        <main>
          <Modal show={this.state.show} handleClose={this.hideModal}>
            <NavLink exact to='/'>Home</NavLink> <br/>
            <NavLink  to='/users/login'>Login</NavLink> <br/>
            <NavLink  to='/workouts'>Workouts</NavLink> <br/>
          </Modal>
          <button type='button' onClick={this.showModal}>Menu</button>
        </main>
      )
    }
  }
  
  const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  
    return (
      <div className={showHideClassName}>
        <section className='modal-main'>
          {children}
          <button
            onClick={handleClose}
          >
            Close
          </button>
        </section>
      </div>
    );
  };

  export default Navigation;
  