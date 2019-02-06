import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getWorkouts, addWorkout } from '../../actions';
import WorkoutList from './WorkoutList';


class WorkoutListPg extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         workouts: [],
    //         exercises: []
    //     }

    // }
    componentDidMount() {
        this.props.getWorkouts();
        this.props.addWorkout();
    }

    render() {
        console.log(this.props);
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
    
export default connect(mapStateToProps, { getWorkouts, addWorkout } )(WorkoutListPg);

