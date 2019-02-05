import React from "react";
import { connect } from "react-redux";

import { WorkoutList } from "../components/Workouts";
import { getWorkouts } from '../actions';

class WorkoutListView extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {
    this.props.getWorkouts();
  }

  render() {
    if (this.props.fetching) {
      <h2>Getting your workouts...</h2>;
    }
    return (
      <div className="WorkoutList_wrapper">
        <WorkoutList workouts={this.props.workouts} />;
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    workouts: state.workReducer.workouts,
    error: state.workReducer.error,
    fetching: state.workReducer.fetching
  };
};

export default connect(
  mapStateToProps,
  { getWorkouts }
)(WorkoutListView);