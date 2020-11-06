import {FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE, POST_SMURFS_SUCCESS, POST_SMURFS_FAILURE} from '../actions/actions'


export const initialState = {
    isLoading: false,
    smurfs: [],
    error: ''
}


export const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_SMURFS:
            return{
                ...state,
                isLoading: true,
                error: ''
            }
        case FETCH_SMURFS_SUCCESS:
            return{
                ...state, 
                isLoading: false,
                smurfs: action.payload
            }
        case FETCH_SMURFS_FAILURE:
            return{
                ...state,
                isLoading: false,
                error: action.payload
            }
        case POST_SMURFS_SUCCESS:
            return{
                ...state,
                smurfs: [action.payload]
            }
        case POST_SMURFS_FAILURE:
            return{
                error: action.payload
            }
        default:
            return state
    }
}