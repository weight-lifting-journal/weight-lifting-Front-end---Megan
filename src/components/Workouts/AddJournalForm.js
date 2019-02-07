import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addWorkout } from '../../actions';

class AddJournalForm extends Component {
    state = {
        date: '',
        region: ''
    };
    handleInputChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    handleAddJournal = _ => {
      const { date, region } = this.state;
      this.props.addWorkout({ date, region });
      this.setState({ date: '', region: ''});
    };
  
    render() {
      return (
        <form className="Column-Layout">
          <input
            className="input"
            value={this.state.date}
            name="date"
            type="text"
            placeholder="Date of Workout"
            onChange={this.handleInputChange}
          />
          <input
            className="input"
            value={this.state.region}
            name="region"
            type="text"
            placeholder="Region"
            onChange={this.handleInputChange}
          />
          <button onClick={() => this.handleAddJournal()} type="button">
            Add New Journal
          </button>
        </form>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      error: state.error,
      addingWorkout: state.addingWorkout
    };
  };
  
  export default connect(mapStateToProps, { addWorkout })(AddJournalForm);