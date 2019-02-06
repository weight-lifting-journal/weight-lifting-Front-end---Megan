import React from 'react';


function Workouts(props) {
  return(
      <div>
          {props.workouts.map(workout => (
              <div key={workout.id}>
                  <div><span>{workout.date}</span></div>
                  <div><span>{workout.region}</span></div>
                  <div><span>{workout.name}</span></div>
                  <div><span>{workout.reps}</span></div>
                  <div><span>{workout.sets}</span></div>
                  <div><span>{workout.weight}</span></div>
              </div>
          ))}
      </div>
  )
}

export default Workouts;