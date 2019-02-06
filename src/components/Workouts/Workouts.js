import React from 'react';

const Workouts = props => {
  return(
      <div className='workout' id={props.workout.id}>
          <h1>{props.workout.date}</h1>
          <p>{props.workout.region}</p>
      </div>
  )
}



 

export default Workouts;