import axios from 'axios';

export const GET_WORKOUTS = 'GET_WORKOUTS';
export const GET_WORKOUTS_SUCCESS = 'GET_WORKOUTS_SUCCESS';
export const GET_WORKOUTS_FAILURE = 'GET_WORKOUTS_FAILURE';
export const ADD_WORKOUT_START = 'ADD_WORKOUT_START';
export const ADD_WORKOUT_SUCCESS = 'ADD_WORKOUT_SUCCESS';
export const ADD_WORKOUT_FAILURE = 'ADD_WORKOUT_FAILURE';

export const getWorkouts = () => dispatch => {

    dispatch({
        type: GET_WORKOUTS
    });
    axios
        .get('http://weightliftingjournallambda.herokuapp.com/workouts')
        .then( res  => {
            dispatch({
              type: GET_WORKOUTS_SUCCESS,
              payload: res.data
            });
          })
          .catch(err => {
            dispatch({
              type: GET_WORKOUTS_FAILURE,
              payload: err
            });
          });
}

export const addWorkout = workout => dispatch => {
    dispatch({ 
        type: ADD_WORKOUT_START 
    });
    axios
      .post('http://weightliftingjournallambda.herokuapp.com/workouts', workout)
      .then(res => {
        dispatch({ 
            type: ADD_WORKOUT_START, 
            payload: res.data 
        });
      })
      .catch(err => dispatch({ 
          type: ADD_WORKOUT_FAILURE, 
          payload: err 
        }));
  };