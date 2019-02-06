import React from "react";
import AddJournalForm from "./AddJournalForm";




function WorkoutList(props) {
    return (
        <div>
            <AddJournalForm />
            {props.workouts.map(workout => (
                <div key={workout.id}>
                    <h2>{workout.date}</h2>
                    <h3>{workout.region}</h3>
                </div>
                
            ))}
        </div>
    );
}



export default WorkoutList;

