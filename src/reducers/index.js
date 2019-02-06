import {
    GET_WORKOUTS,
    GET_WORKOUTS_SUCCESS,
    GET_WORKOUTS_FAILURE,
    ADD_WORKOUT_START,
    ADD_WORKOUT_SUCCESS,
    ADD_WORKOUT_FAILURE
} from '../actions';

const initialState = {
    workouts: [],
    exercises: [],
    gettingWorkouts: false,
    addingWorkouts: false,
    updatingWorkouts: false,
    deletingWorkouts: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_WORKOUTS:
            return {
                ...state,
                gettingWorkouts: true
            }
        case GET_WORKOUTS_SUCCESS:
            return{
                ...state,
                gettingWorkouts: false,
                workouts: action.payload.journalObj,
                exercises: action.payload.exerciseCards
            }
        case GET_WORKOUTS_FAILURE:
            console.log(action.payload, 'this is the action.payload');
            return {
                ...state,
                gettingWorkouts: false,
                error: action.payload
            }
        case ADD_WORKOUT_START:
            return {
                ...state,
                addingWorkouts:true
            }
        case ADD_WORKOUT_SUCCESS:
            return {
                ...state,
                addingWorkouts:false,
                workouts:action.payload,
                error: null
            }
        case ADD_WORKOUT_FAILURE:
            return {
                ...state,
                addingWorkouts: false,
                error: action.payload
            }
    default:
        return state;
    }
}

export default reducer;