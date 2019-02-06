import React from 'react';
import { Link } from 'react-router-dom';

const Workouts = props => {
  const { id, region, date } = props.workout;
  const { amOfExercises } = props;

  return (
    <div
      component={props => {
        return (
          <Link to={`/workout/${id}`} {...props}>
            <div
              primary={`${region} (${amOfExercises})`}
              secondary={date}
            />
          </Link>
        );
      }}
    />
  );
};

 

export default Workouts;