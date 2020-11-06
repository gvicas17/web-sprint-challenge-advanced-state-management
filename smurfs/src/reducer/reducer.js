import {FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, POST_SMURFS, POST_SMURFS_SUCCESS, POST_SMURFS_FAILURE} from '../actions/actions'


export const initialState = {
    smurfs: [],
    error: ''
}


export const reducer = (state = initialState, action) => {
    switch(action.type){

        case FETCH_SMURFS:
            return{
                ...state
            }
        case FETCH_SMURFS_SUCCESS:
            return{
                ...state, 
                smurfs: action.payload
            }
        case FETCH_SMURFS_FAILURE:
            return{
                error: action.payload
            }
        case POST_SMURFS:
            return{
                ...state
            }
        case POST_SMURFS_SUCCESS:
            return{
                ...state,
                smurfs: action.payload
            }
        case POST_SMURFS_FAILURE:
            return{
                error: action.payload
            }
        default:
            return state
    }
}