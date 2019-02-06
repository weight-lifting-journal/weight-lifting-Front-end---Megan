import React, { Component } from "react";

import Workouts from './Workouts';

const WorkoutList = props => {
    return (
        <div>
            {props.workouts.map(workout => {
                return <Workouts
                            key={workout.id}
                            workout={workout}
                            amOfExercises={
                                props.exercises.filter(exercise => {
                                    return exercise.journalId === workout.id;
                                }).length
                            }
                        />
            })}
        </div>
    )
}



export default WorkoutList;

