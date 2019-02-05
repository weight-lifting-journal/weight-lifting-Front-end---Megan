import {
    GET_WORKOUTS,
    GET_WORKOUTS_SUCCESS,
    GET_WORKOUTS_FAILURE
} from '../actions';

const initialState = {
    workouts: [],
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
                workouts: action.payload,
                error: null
            }
        case GET_WORKOUTS_FAILURE:
            return {
                ...state,
                gettingWorkouts: false,
                error: action.payload
            }

    default:
        return state;
    }
}

export default reducer;