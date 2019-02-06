import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { getWorkouts } from '../../actions';
import WorkoutList from './WorkoutList';


class WorkoutListPg extends React.Component {
    componentDidMount() {
        this.props.getWorkouts();
    }

    render() {
        return (
            <WorkoutList
                workouts={this.props.workouts}
                exercises={this.props.exercises}
            />
        );
    }
}

const mapStateToProps = state=> ({
    workouts: state.workouts,
    exercises: state.exercises
})
    
export default connect(mapStateToProps, {getWorkouts} )(WorkoutListPg);

