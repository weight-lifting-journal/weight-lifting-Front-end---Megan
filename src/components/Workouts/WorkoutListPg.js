import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWorkouts } from '../../actions';
import WorkoutList from './WorkoutList';

class WorkoutListPg extends Component {

    componentDidMount() {
        this.props.getWorkouts()
      }

      render() {
        return (
          <div className="App">
            <WorkoutList workouts={this.props.workout} />
          </div>
        );
      }
    }
    
    const mapStateToProps = state => {
      return {
        ...state
      }
    }
    
    const mapDispatchToProps = dispatch => {
      return {
        getSmurfs: () => dispatch(getWorkouts()),
      }
    }
    
export default connect(mapStateToProps, mapDispatchToProps)(WorkoutListPg);

