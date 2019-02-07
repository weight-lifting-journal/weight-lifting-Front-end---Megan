import React from "react";
import AddJournalForm from "./AddJournalForm";




function WorkoutList(props) {
    // function routeToJournal(e, journal) {
    //     e.preventDefault();
    //     props.history.push(`/workouts/${journal.id}`);
    //     props.getJournalById(journal.id)
    //   }

    return (
        <div>
            {props.workouts.map(workout => (
                <div 
                    key={workout.id}>
                    <h2>{workout.date}</h2>
                    <h3>{workout.region}</h3>
                    <button>Delete</button>
                    <button>Add New Journal</button>
                </div>
                
            ))}
        </div>
    );
}



export default WorkoutList;

