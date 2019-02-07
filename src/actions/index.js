import axios from 'axios';

export const GET_WORKOUTS = 'GET_WORKOUTS';
export const GET_WORKOUTS_SUCCESS = 'GET_WORKOUTS_SUCCESS';
export const GET_WORKOUTS_FAILURE = 'GET_WORKOUTS_FAILURE';
export const ADD_WORKOUT_START = 'ADD_WORKOUT_START';
export const ADD_WORKOUT_SUCCESS = 'ADD_WORKOUT_SUCCESS';
export const ADD_WORKOUT_FAILURE = 'ADD_WORKOUT_FAILURE';
export const DELETE_WORKOUT = 'DELETE_WORKOUT';
export const DELETE_WORKOUT_SUCCESS = 'DELETE_WORKOUT_SUCCESS';
export const DELETE_WORKOUT_FAILURE = 'DELETE_WORKOUT_FAILURE';

const DUMMY_DATA = {
    journalsObj: [
      {
        id: 1,
        date: "Feb 12, 2019",
        region: "upper body"
      },
      {
        id: 5,
        date: "Feb 13, 2019",
        region: "legs"
      },
      {
        id: 9,
        date: "Feb 14, 2019",
        region: "legs"
      },
      {
        id: 13,
        date: "Feb 20",
        region: "upper body"
      }
    ],
    exerciseCards: [
      {
        journalId: 1,
        name: "bench press",
        reps: 12,
        sets: 3,
        weight: "190lbs"
      },
      {
        journalId: 1,
        name: "curls",
        reps: 15,
        sets: 3,
        weight: "60lbs"
      },
      {
        journalId: 5,
        name: "leg press",
        reps: 12,
        sets: 3,
        weight: "250lbs"
      },
      {
        journalId: 2,
        name: "squats",
        reps: 25,
        sets: 5,
        weight: "150lbs"
      }
    ]
  };

const URL = 'https://weightliftingjournallambda.herokuapp.com';


export const getWorkouts = () => dispatch => {

    dispatch({
        type: GET_WORKOUTS
    });
    axios
        .get(`${URL}/workouts`, {
            headers: {Authorization: localStorage.getItem('jwt')}
        })
        .then(res  => {
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
        .post(`${URL}/workouts`, workout, {
            headers: {Authorization: localStorage.getItem('jwt')}
        })
        .then(res  => {
            dispatch({
              type: ADD_WORKOUT_SUCCESS,
              payload: {...workout, ...res.data}
            });
          })
          .catch(err => {
            dispatch({
              type: ADD_WORKOUT_FAILURE,
              payload: err
            });
          });
}



// export const addWorkout = workout => {
//   return dispatch => {
//     dispatch({ type: ADD_WORKOUT_START });

//     return axios
//       .post(`${URL}/workouts`, workout, {
//         headers: { Authorization: localStorage.getItem("jwt") }
//       })
//       .then(res => {
//         dispatch({
//           type: ADD_WORKOUT_SUCCESS,
//           payload: { ...workout, ...res.data }
//         });
//       })
//       .catch(error => dispatch({ type: ADD_WORKOUT_FAILURE, payload: error }));
//   };
// };


export const deleteWorkout = id => {
  const deletedFriend = axios.delete(`${URL}/delete`, {
    data: { id },
    headers: { Authorization: localStorage.getItem('jwt')}
  });
  return dispatch => {
    dispatch({ type: DELETE_WORKOUT });
    deletedFriend
      .then(({ data }) => {
        dispatch({ type: DELETE_WORKOUT_SUCCESS, payload: data });
      })
      .catch(err => {
        dispatch({ type: DELETE_WORKOUT_FAILURE, payload: err });
      });
  };
};