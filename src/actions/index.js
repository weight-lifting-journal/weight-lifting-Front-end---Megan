import axios from 'axios';

export const GET_WORKOUTS = 'GET_WORKOUTS';
export const GET_WORKOUTS_SUCCESS = 'GET_WORKOUTS_SUCCESS';
export const GET_WORKOUTS_FAILURE = 'GET_WORKOUTS_FAILURE';

export const getWorkouts = () => dispatch => {
    dispatch({
        type: GET_WORKOUTS
    });
    axios
        .get('http://weightliftingjournallambda.herokuapp.com/workouts')
        .then(({ data }) => {
            dispatch({
              type: GET_WORKOUTS_SUCCESS,
              payload: data.results
            });
          })
          .catch(err => {
            dispatch({
              type: GET_WORKOUTS_FAILURE,
              payload: err
            });
          });
}