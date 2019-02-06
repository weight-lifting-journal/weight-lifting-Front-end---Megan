import React, { Component } from "react";

import Workouts from './Workouts';

const WorkoutList = props => {
    return (
        <div>
            {props.workouts.map(workout => {
                // return (
                    <Workouts key={workout.id} date={workout.date} region={workout.region} />
                // )
            })}
        </div>
    )
}



export default WorkoutList;

