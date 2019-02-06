import React, { Component } from "react";

import Workouts from './Workouts';

const WorkoutList = props => {
    return(
        <div className='workout-list'>
            {props.workouts.map((w, i) => <Workouts smurf={w} key={i}/>)}
            </div>
    );
}



export default WorkoutList;

