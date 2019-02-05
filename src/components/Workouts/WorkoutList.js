import React from "react";

import Workout from './Workouts';

const WorkoutList = props => {
  return (
    <ul>
      {props.characters.map(character => {
        return <Workout key={character.name} character={character} />;
      })}
    </ul>
  );
};

export default WorkoutList;